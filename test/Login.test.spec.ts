import { test, expect } from "@playwright/test";
import LandingPage from "../page/LandingPage.page";
import LoginPage from "../page/Login.page";
import * as users from "../data/credentials.json";

test.describe("Login Feature @login", async () => {

    let landingPage: LandingPage;
    let loginPage: LoginPage;
    
    test.beforeEach(async ({ page, baseURL }) => {
        landingPage = new LandingPage(page);
        loginPage = new LoginPage(page);
        await page.goto(`${baseURL}`);
    })

    test("Positive: User tries to login with correct credentials.", async ({ page }) => {

        await landingPage.clickOnCourse();
        await landingPage.clickOnSignIn();
        await page.waitForTimeout(5000);

        await loginPage.enterUsername(users.stage1.username);
        await page.waitForTimeout(5000);

        await loginPage.enterPassword(users.stage1.password);
        
        await loginPage.clickLoginButon();
        await page.waitForTimeout(5000);

        // // Add assertion to confirm successful login
        // const loginSuccessElement = await page.getByTestId('login-success');
        // await expect(loginSuccessElement).toBeVisible();
    });
})

