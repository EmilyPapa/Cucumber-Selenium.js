const assert = require("assert"); //to perform assertions for tests
var seleniumWebdriver = require("selenium-webdriver");
const {Given, When, Then } = require("@cucumber/cucumber");
const { callback } = require("util");

Given('I am on the Cucumber.js GitHub repository', function (callback) {
    this.driver.get("https://github.com/cucumber/cucumber-js/")
    callback();
  });


 Given('I closed the Join GitHub today Dialogue', function (callback) {
    this.driver.findElement({xpath: "//button[@type='submit']"}).click();
    callback();
  });


  Then('I click on {string}', function (text) {
    return this.driver.findElement({linkText: text}).then(function (element) {
        return element.click();
    });
     

});
