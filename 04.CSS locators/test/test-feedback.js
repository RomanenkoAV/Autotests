const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Test feedback", async function () {
  it("User can leave feedback", async function () {
    const testUrl = "http://qajava.skillbox.ru/module04/lesson3/os.html";
    const nameLocator = By.css(".data.text");
    const buttonLocator = By.id("comment");
    const messageLocator = By.className("message-header");

    await driver.get(testUrl);

    await driver.findElement(nameLocator).sendKeys("Ivan");
    await driver.findElement(buttonLocator).click();

    expect(await driver.findElement(messageLocator).isDisplayed(),"Result message is not shown").to.be.true;
  });
});
