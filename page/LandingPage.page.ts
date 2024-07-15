import { Page, selectors } from "@playwright/test";

export default class LandingPage { 

    ArrowoodCourse = "//div[contains(@class, 'font-bold') and contains(text(), 'Arrowood Golf Course')]";

    SignInButton = "//button[@data-testid='signin-button-id']";

    constructor(public page: Page) {}

    async clickOnCourse() {
        // this.page.locator(this.ArrowoodCourse).click();
        await this.page.getByTestId('course-id').click();

    }

    async clickOnSignIn() {
        await this.page.locator(this.SignInButton).click();
    }

} 