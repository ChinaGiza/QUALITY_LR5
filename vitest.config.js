import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        // Исключаем папку e2e из тестов Vitest
        exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
        },
    },
});