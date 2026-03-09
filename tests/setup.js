// Test environment setup - localStorage mock for jsdom
// jsdom provides a built-in localStorage implementation,
// but we add a helper to clear it between tests for isolation.

import { beforeEach } from 'vitest';

beforeEach(() => {
  localStorage.clear();
});
