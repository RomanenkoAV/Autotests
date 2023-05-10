const { By } = require("selenium-webdriver");
const { expect } = require("chai");

const emailLocator = By.id("email");
const passwordLocator = By.name("password");
const buttonLocator = By.tagName("button");

describe("Test club socks (1)", async function () {
  it("Positive", async function () {
    const testUrl =
      "http://qajava.skillbox.ru/module04/homework/auth/index.html";
    const email = "@";
    const password = "123";

    await driver.get(testUrl);

    await driver.findElement(emailLocator).sendKeys(email);
    await driver.findElement(passwordLocator).sendKeys(password);
    await driver.findElement(buttonLocator).click();

    const messageLocator = By.className("form-error-password-email");

    expect(
      await driver.findElement(messageLocator).isDisplayed(),
      "Message is not shown"
    ).to.be.true;

    expect(await driver.findElement(messageLocator).getText()).to.equal(
      "Некорректный email или пароль",
      "Wrong greeting text"
    );
  });
});
