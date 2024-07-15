import { Page } from "@playwright/test";
import * as selectors from '../utils/selectors.json';

export default class LoginPage {

    UserEmail = "//input[@data-testid='login-email-id']";
    UserPassword = "//input[@data-testid='login-password-id']";
    LoginButton = "//input[@data-testid='login-button-id']";

    constructor(public page: Page) {
    }

    async enterUsername(username: string) {
        await this.page.locator(this.UserEmail).fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator(this.UserPassword).fill(password);
    }


    async clickLoginButon() {
        await this.page.locator(this.LoginButton).click();
    }

    get getErrorMessage() {
        return this.page.locator(selectors.LoginPage.errorMessage).textContent();
    }

}