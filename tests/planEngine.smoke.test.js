import { describe, it, expect, beforeAll } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Extract and evaluate the script from the HTML file
function loadModules() {
  const html = fs.readFileSync(path.resolve(__dirname, '../ReciteWords.html'), 'utf-8');
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  if (!scriptMatch) throw new Error('No script tag found');
  const scriptContent = scriptMatch[1];
  
  // Create a module-like environment
  const moduleObj = { exports: {} };
  const fn = new Function('module', 'exports', 'localStorage', 'document', scriptContent);
  
  // Mock document.getElementById and addEventListener
  const mockApp = { innerHTML: '' };
  const mockDoc = {
    getElementById: (id) => id === 'app' ? mockApp : null,
    addEventListener: () => {},
  };
  
  fn(moduleObj, moduleObj.exports, localStorage, mockDoc);
  return moduleObj.exports;
}

describe('PlanEngine smoke test', () => {
  let PlanEngine, Storage;

  beforeAll(() => {
    const modules = loadModules();
    PlanEngine = modules.PlanEngine;
    Storage = modules.Storage;
  });

  it('should be exported', () => {
    expect(PlanEngine).toBeDefined();
    expect(typeof PlanEngine.generateGroups).toBe('function');
    expect(typeof PlanEngine.getTodayWords).toBe('function');
    expect(typeof PlanEngine.completeDailySession).toBe('function');
    expect(typeof PlanEngine.getCurrentDay).toBe('function');
    expect(typeof PlanEngine.setDailyCount).toBe('function');
  });

  it('generateGroups splits words into groups of dailyCount', () => {
    const pool = [
      { word: 'a' }, { word: 'b' }, { word: 'c' }, { word: 'd' }, { word: 'e' },
      { word: 'f' }, { word: 'g' }
    ];
    const groups = PlanEngine.generateGroups(pool, 3);
    expect(groups).toHaveLength(3);
    expect(groups[0].words).toEqual(['a', 'b', 'c']);
    expect(groups[1].words).toEqual(['d', 'e', 'f']);
    expect(groups[2].words).toEqual(['g']);
  });

  it('generateGroups returns empty array for empty pool', () => {
    const groups = PlanEngine.generateGroups([], 5);
    expect(groups).toEqual([]);
  });

  it('getTodayWords returns words for current group, skipping learned', () => {
    const appData = {
      plan: {
        currentGroupIndex: 0,
        groups: [
          { words: ['GameObject', 'Component', 'Transform'] }
        ]
      },
      progress: { 'GameObject': { masteryLevel: 'know' } }
    };
    const result = PlanEngine.getTodayWords(appData);
    // Should skip 'GameObject' (already learned)
    expect(result.length).toBe(2);
    expect(result.map(w => w.word)).toEqual(['Component', 'Transform']);
  });

  it('getTodayWords auto-advances when all words in group are learned', () => {
    const appData = {
      plan: {
        currentGroupIndex: 0,
        groups: [
          { words: ['GameObject'] },
          { words: ['Component', 'Transform'] }
        ]
      },
      progress: { 'GameObject': { masteryLevel: 'know' } }
    };
    const result = PlanEngine.getTodayWords(appData);
    expect(result.map(w => w.word)).toEqual(['Component', 'Transform']);
    expect(appData.plan.currentGroupIndex).toBe(1);
  });

  it('getTodayWords returns empty array when all groups done', () => {
    const appData = {
      plan: {
        currentGroupIndex: 0,
        groups: [{ words: ['GameObject'] }]
      },
      progress: { 'GameObject': { masteryLevel: 'know' } }
    };
    const result = PlanEngine.getTodayWords(appData);
    expect(result).toEqual([]);
  });

  it('completeDailySession advances currentGroupIndex and saves', () => {
    const appData = {
      version: 1,
      settings: { dailyNewWords: 20 },
      plan: { startDate: '2025-01-01', currentGroupIndex: 2, groups: [] },
      progress: {},
      session: { date: '2025-01-01', mode: null, currentIndex: 0, stats: { forget: 0, fuzzy: 0, know: 0 }, reviewQueue: [] },
      extractedWords: { cached: false, words: [] },
      extractedPlan: { currentGroupIndex: 0, groups: [] }
    };
    PlanEngine.completeDailySession(appData);
    expect(appData.plan.currentGroupIndex).toBe(3);
    // Verify it was saved
    const loaded = Storage.load();
    expect(loaded.plan.currentGroupIndex).toBe(3);
  });

  it('getCurrentDay returns 0 for today start date', () => {
    const today = new Date().toISOString().slice(0, 10);
    const appData = { plan: { startDate: today } };
    expect(PlanEngine.getCurrentDay(appData)).toBe(0);
  });

  it('setDailyCount rejects values outside [5, 50]', () => {
    const appData = {
      settings: { dailyNewWords: 20 },
      plan: { groups: [], currentGroupIndex: 0 },
      progress: {}
    };
    expect(PlanEngine.setDailyCount(appData, 4)).toBe(false);
    expect(appData.settings.dailyNewWords).toBe(20);
    expect(PlanEngine.setDailyCount(appData, 51)).toBe(false);
    expect(appData.settings.dailyNewWords).toBe(20);
  });

  it('setDailyCount accepts values in [5, 50] and regenerates groups', () => {
    const appData = {
      version: 1,
      settings: { dailyNewWords: 20 },
      plan: { startDate: '2025-01-01', currentGroupIndex: 0, groups: [] },
      progress: {},
      session: { date: '2025-01-01', mode: null, currentIndex: 0, stats: { forget: 0, fuzzy: 0, know: 0 }, reviewQueue: [] },
      extractedWords: { cached: false, words: [] },
      extractedPlan: { currentGroupIndex: 0, groups: [] }
    };
    const result = PlanEngine.setDailyCount(appData, 10);
    expect(result).toBe(true);
    expect(appData.settings.dailyNewWords).toBe(10);
    expect(appData.plan.groups.length).toBeGreaterThan(0);
    // Each group (except last) should have 10 words
    for (let i = 0; i < appData.plan.groups.length - 1; i++) {
      expect(appData.plan.groups[i].words.length).toBe(10);
    }
  });

  it('setDailyCount preserves learned progress', () => {
    const appData = {
      version: 1,
      settings: { dailyNewWords: 20 },
      plan: { startDate: '2025-01-01', currentGroupIndex: 0, groups: [] },
      progress: { 'GameObject': { masteryLevel: 'know' } },
      session: { date: '2025-01-01', mode: null, currentIndex: 0, stats: { forget: 0, fuzzy: 0, know: 0 }, reviewQueue: [] },
      extractedWords: { cached: false, words: [] },
      extractedPlan: { currentGroupIndex: 0, groups: [] }
    };
    PlanEngine.setDailyCount(appData, 10);
    // 'GameObject' should NOT appear in any group
    const allWords = appData.plan.groups.flatMap(g => g.words);
    expect(allWords).not.toContain('GameObject');
  });
});
