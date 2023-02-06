const { expect } = require('@playwright/test')

exports.PomPage = class PomPage {

    constructor(page) {
        this.page = page;
        this.pomLink = page.locator('a', { hasText: 'Page Object Models' })
        this.installLink = page.locator('h1', { hasText: 'Installation' })
        this.pomTitle = page.locator('h1', { hasText: 'Page Object Models' })
    }

    async goto() {
        await this.page.goto('./docs/intro')
    }

    async openPomSection() {
        await expect(this.installLink).toBeVisible()
        await this.pomLink.click()
    }
}