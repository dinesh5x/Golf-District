import type {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    
    //testMatch: ["test/"],
    use: {
        baseURL: "https://stage1.golfdistrict.in/",
        headless: true,
        screenshot: "on",
        video: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 60 * 1000 * 5,
    retries: 0,
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }]]
};

export default config;