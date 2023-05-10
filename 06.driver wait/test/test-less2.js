const { By, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Taxi test", async function () {
  it("(1)", async function () {
    const testUrl = "https://lm.skillbox.cc/qa_tester/module04/practice1/";

    const notId = By.css("input:not([id])");

    const pClassFormNotError = By.css("p[class^='form']:not([class$='error'])");

    const pFirstFormRow = By.css("div.form-inner p:first-of-type.form-row");

    await driver.get(testUrl);

    await driver.findElement(notId);
    await driver.findElement(pClassFormNotError);
    await driver.findElement(pFirstFormRow);
  });
});
