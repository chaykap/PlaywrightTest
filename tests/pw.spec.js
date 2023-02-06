const { test, expect } = require('@playwright/test');
const { PomPage } = require('../pageObjects/pomPage')

test('Open Page Object section', async ({ page }) => {
    const pomPage = new PomPage(page);
    await pomPage.goto();
    await pomPage.openPomSection();
    await expect(pomPage.pomTitle).toBeVisible();
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
})