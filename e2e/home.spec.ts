import { test, expect } from '@playwright/test';

test.describe('Home Page Tests', () => {
    test('should load page and interact with button', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('Quality Lab 5 - Тестовый стенд');

        const btn = page.locator('#test-btn');
        await btn.click();

        await expect(page.locator('#test-result')).toHaveText('E2E Тест успешно пройден!');
        await expect(page.locator('#test-result')).toHaveCSS('color', 'rgb(0, 128, 0)');
    });

    // === ДОПОЛНИТЕЛЬНОЕ ЗАДАНИЕ 2: Визуальное регрессионное тестирование ===
    test('visual regression test (homepage)', async ({ page }) => {
        await page.goto('/');
        // Сравнивает скриншот с базовым образом (baseline)
        await expect(page).toHaveScreenshot('homepage-baseline.png');
    });
});