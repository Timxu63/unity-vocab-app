import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: ['**/tests/**/*.test.js'],
    setupFiles: [resolve(__dirname, './tests/setup.js')],
  },
});
