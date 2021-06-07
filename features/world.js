const { setWorldConstructor, World, setDefaultTimeout } = require('@cucumber/cucumber')
const seleniumWebdriver = require('selenium-webdriver')
var firefox = require('selenium-webdriver/firefox');

class CustomWorld extends World {
    driver = new seleniumWebdriver.Builder()
        .forBrowser('firefox')
        .build()

    constructor(options) {
        super(options)
    }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(90 * 1000);

// TODO