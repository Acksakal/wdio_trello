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
                args: ['headless', 'disable-gpu']
            }
        }],
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://trello.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    specFileRetries: 1,

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
        try {
            await browser.emulate('userAgent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36')
            await browser.maximizeWindow();

            await browser.url('/');

            const loginButton = await $(`//a[@data-uuid='MJFtCCgVhXrVl7v9HA7EH_login']`);
            await loginButton.click();

            const usernameInput = await $(`//input[@data-testid='username']`);
            await usernameInput.setValue(process.env.LOGIN);

            const loginSubmitButton = await $(`//button[@id='login-submit']`);
            await loginSubmitButton.click();

            const passwordInput = await $(`//input[@data-testid='password']`);
            await passwordInput.waitForDisplayed();
            await passwordInput.setValue(process.env.PASSWORD);

            await loginSubmitButton.click();

            const createMenuButton = await $(`//button[@data-testid='header-create-menu-button']`);
            await createMenuButton.waitForDisplayed();

            console.log('User logged in successfully in before hook!');
        } catch (error) {
            console.error('Error during before login setup:', error);
            throw error;
        }
    },
}