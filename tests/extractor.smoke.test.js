import { describe, it, expect, beforeAll } from 'vitest';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function loadModules() {
  const html = fs.readFileSync(path.resolve(__dirname, '../ReciteWords.html'), 'utf-8');
  const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
  if (!scriptMatch) throw new Error('No script tag found');
  const scriptContent = scriptMatch[1];
  const moduleObj = { exports: {} };
  const fn = new Function('module', 'exports', 'localStorage', 'document', scriptContent);
  const mockApp = { innerHTML: '' };
  const mockDoc = {
    getElementById: (id) => id === 'app' ? mockApp : null,
    addEventListener: () => {},
  };
  fn(moduleObj, moduleObj.exports, localStorage, mockDoc);
  return moduleObj.exports;
}

describe('Extractor smoke test', () => {
  let Extractor;

  beforeAll(() => {
    const modules = loadModules();
    Extractor = modules.Extractor;
  });

  it('should be exported', () => {
    expect(Extractor).toBeDefined();
    expect(Extractor.STOP_WORDS).toBeInstanceOf(Set);
    expect(typeof Extractor.extractFromSentence).toBe('function');
    expect(typeof Extractor.extractAll).toBe('function');
    expect(typeof Extractor.filter).toBe('function');
  });

  it('STOP_WORDS contains all required words', () => {
    const required = [
      'a', 'the', 'is', 'to', 'for', 'in', 'on', 'of', 'and', 'or', 'it', 'this', 'that',
      'with', 'from', 'at', 'by', 'an', 'as', 'be', 'are', 'was', 'were', 'has', 'have',
      'had', 'do', 'does', 'did', 'not', 'no', 'but', 'if', 'so', 'up', 'out', 'all',
      'can', 'will', 'may', 'use', 'new', 'set'
    ];
    for (const w of required) {
      expect(Extractor.STOP_WORDS.has(w)).toBe(true);
    }
    expect(Extractor.STOP_WORDS.size).toBe(required.length);
  });

  it('extractFromSentence filters stop words, existing words, and short words', () => {
    const existing = new Set(['rigidbody', 'component']);
    const result = Extractor.extractFromSentence(
      'Add a Rigidbody component to enable physics.',
      existing
    );
    // 'add' => kept, 'a' => stop word, 'rigidbody' => existing, 'component' => existing,
    // 'to' => stop word, 'enable' => kept, 'physics' => kept
    expect(result).toEqual(['add', 'enable', 'physics']);
  });

  it('extractFromSentence returns unique words (case-insensitive)', () => {
    const result = Extractor.extractFromSentence(
      'The cat and the Cat sat on the mat',
      new Set()
    );
    // 'the' => stop, 'cat' => kept once, 'and' => stop, 'sat' => kept, 'on' => stop, 'mat' => kept
    expect(result).toEqual(['cat', 'sat', 'mat']);
  });

  it('extractFromSentence returns empty for null/empty input', () => {
    expect(Extractor.extractFromSentence('', new Set())).toEqual([]);
    expect(Extractor.extractFromSentence(null, new Set())).toEqual([]);
  });

  it('extractFromSentence ignores numbers and punctuation', () => {
    const result = Extractor.extractFromSentence(
      'Use 3 items: hello-world, test123 ok!',
      new Set()
    );
    // 'use' => stop word, 'items' => kept, 'hello' => kept, 'world' => kept, 'test' => kept, 'ok' => kept
    expect(result).toEqual(['items', 'hello', 'world', 'test', 'ok']);
  });

  it('extractAll returns sorted ExtractedWord objects with sources', () => {
    const pool = [
      { word: 'Box Collider', example: 'Add a Box Collider to the crate object.' },
      { word: 'Rigidbody', example: 'Add Rigidbody to make the crate fall with gravity.' }
    ];
    const result = Extractor.extractAll(pool);
    // Professional words: box, collider, rigidbody
    // From sentence 1: 'add', 'crate', 'object' (box/collider filtered, a/the/to are stop words)
    // From sentence 2: 'add', 'make', 'crate', 'fall', 'gravity' (rigidbody/the/to/with filtered)
    expect(result.length).toBeGreaterThan(0);
    // Should be sorted alphabetically
    for (let i = 1; i < result.length; i++) {
      expect(result[i].word >= result[i - 1].word).toBe(true);
    }
    // Each entry should have word and sources
    for (const entry of result) {
      expect(typeof entry.word).toBe('string');
      expect(entry.word.length).toBeGreaterThanOrEqual(2);
      expect(Array.isArray(entry.sources)).toBe(true);
      expect(entry.sources.length).toBeGreaterThanOrEqual(1);
    }
    // 'crate' appears in both sentences
    const crate = result.find(e => e.word === 'crate');
    expect(crate).toBeDefined();
    expect(crate.sources.length).toBe(2);
    // No professional words in results
    const proWords = ['box', 'collider', 'rigidbody'];
    for (const entry of result) {
      expect(proWords).not.toContain(entry.word);
    }
  });

  it('extractAll returns empty for empty pool', () => {
    expect(Extractor.extractAll([])).toEqual([]);
  });

  it('filter removes stop words, professional words, and duplicates', () => {
    const raw = ['hello', 'the', 'world', 'hello', 'rigidbody', 'ok'];
    const pro = new Set(['rigidbody']);
    const result = Extractor.filter(raw, pro);
    expect(result).toEqual(['hello', 'world', 'ok']);
  });

  it('filter returns empty for all-stop-words input', () => {
    const raw = ['the', 'a', 'is', 'to', 'for'];
    const result = Extractor.filter(raw, new Set());
    expect(result).toEqual([]);
  });

  it('multi-word professional terms filter individual parts', () => {
    const pool = [
      { word: 'Box Collider', example: 'Use a box for the collider shape.' }
    ];
    const result = Extractor.extractAll(pool);
    // 'box' and 'collider' are professional word parts, should be filtered
    const words = result.map(e => e.word);
    expect(words).not.toContain('box');
    expect(words).not.toContain('collider');
    // 'shape' should be present
    expect(words).toContain('shape');
  });
});
