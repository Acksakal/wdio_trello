import LoginPage from "./features/pom/pages/login.page.js";

export const config = {
    runner: 'local',
    specs: [
        './features/**/*.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 2,
    
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                // args: ['headless', 'disable-gpu']
            }
        }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://trello.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    // specFileRetries: 1,

    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],

    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    
    before: async function () {
        const loginPage = new LoginPage()
        await browser.emulate(
            'userAgent',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
        )
        await browser.maximizeWindow();
        await loginPage.open('/');
        await loginPage.login(process.env.LOGIN, process.env.PASSWORD);
    },
}