import pages from "../test/pom/pages/page-factory.js";

export const config = {
    runner: 'local',
    specs: [
        '../test/features/create.board.feature'
    ],
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['disable-gpu', '--lang=en']
            }
        }],
    logLevel: 'debug',
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
        require: ['src/test/steps/create.board.js'],
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
        await browser.emulate(
            'userAgent',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
        )
        await browser.maximizeWindow();
        await pages('login').logIn(process.env.LOGIN, process.env.PASSWORD);
    },
}