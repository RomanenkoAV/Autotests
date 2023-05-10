const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Test club socks (2)", async function () {
  it("Positive(1) By.cssSelector", async function () {
    const testUrl =
      "http://qajava.skillbox.ru/module04/homework/auth/changed.html";
    const email = "@";
    const password = "123";

    const emailLocator = By.css(".input-data"); // локатор Email
    const passwordLocator = By.css(".password"); // локатор пароля
    const buttonLocator = By.css(".form-submit"); // локатор кнопки

    await driver.get(testUrl);

    await driver.findElement(emailLocator).sendKeys(email);
    await driver.findElement(passwordLocator).sendKeys(password);
    await driver.findElement(buttonLocator).click();

    const messageLocator = By.css(".form-error-password-email"); // локатор сообщения об ошибке

    expect(
      await driver.findElement(messageLocator).isDisplayed(),
      "Message is not shown"
    ).to.be.true;

    expect(await driver.findElement(messageLocator).getText()).to.equal(
      "Некорректный email или пароль",
      "Wrong greeting text"
    );
  });

  it("Positive(2) By.cssSelector+tegName", async function () {
    const testUrl =
      "http://qajava.skillbox.ru/module04/homework/auth/changed.html";
    const email = "@";
    const password = "123";

    const emailLocator = By.css("input.input-data"); // локатор Email
    const passwordLocator = By.css("input.password"); // локатор пароля
    const buttonLocator = By.css("button.form-submit"); // локатор кнопки

    await driver.get(testUrl);

    await driver.findElement(emailLocator).sendKeys(email);
    await driver.findElement(passwordLocator).sendKeys(password);
    await driver.findElement(buttonLocator).click();

    const messageLocator = By.css("pre.form-error-password-email"); // локатор сообщения об ошибке

    expect(
      await driver.findElement(messageLocator).isDisplayed(),
      "Message is not shown"
    ).to.be.true;

    expect(await driver.findElement(messageLocator).getText()).to.equal(
      "Некорректный email или пароль",
      "Wrong greeting text"
    );
  });

  it("Positive(3) By.cssSelector+ID", async function () {
    const testUrl =
      "http://qajava.skillbox.ru/module04/homework/auth/changed.html";
    const email = "@";
    const password = "123";

    const emailLocator = By.css("#email"); // локатор Email
    const passwordLocator = By.css("#password"); // локатор пароля
    const buttonLocator = By.css("#submit"); // локатор кнопки

    await driver.get(testUrl);

    await driver.findElement(emailLocator).sendKeys(email);
    await driver.findElement(passwordLocator).sendKeys(password);
    await driver.findElement(buttonLocator).click();

    const messageLocator = By.css("#error"); // локатор сообщения об ошибке

    expect(
      await driver.findElement(messageLocator).isDisplayed(),
      "Message is not shown"
    ).to.be.true;

    expect(await driver.findElement(messageLocator).getText()).to.equal(
      "Некорректный email или пароль",
      "Wrong greeting text"
    );
  });

  it("Positive(4) By.cssSelector+ID+Tag+class", async function () {
    const testUrl =
      "http://qajava.skillbox.ru/module04/homework/auth/changed.html";
    const email = "@";
    const password = "123";

    const emailLocator = By.css("input#email.form-input.input-data"); // локатор Email
    const passwordLocator = By.css("input#password.form-input.password"); // локатор пароля
    const buttonLocator = By.css("button#submit.form-submit"); // локатор кнопки

    await driver.get(testUrl);

    await driver.findElement(emailLocator).sendKeys(email);
    await driver.findElement(passwordLocator).sendKeys(password);
    await driver.findElement(buttonLocator).click();

    const messageLocator = By.css("pre#error.form-error-password-email"); // локатор сообщения об ошибке

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
