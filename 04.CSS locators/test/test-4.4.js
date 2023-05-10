const { By } = require("selenium-webdriver");
const { expect } = require("chai");

const nameLocator = By.css(".form-input.fio");
const streetLocator = By.css(".data.form-input.street");
const numderHouseLocator = By.css(".form-input.house");
const flatLocator = By.css(".form-input.flat");
const dayLocator = By.css(".form-input.date");
const buttonLocator = By.className("form-submit");

describe("Test master", async function () {
  it("Positive", async function () {
    const testUrl = "http://qajava.skillbox.ru/module04/lesson3/index.html";
    const name = "Иванов Иван Иванович";
    const street = "Mira";
    const numderHouse = "3F";
    const flat = "882";
    const day = "tomorrow";

    await driver.get(testUrl);

    await driver.findElement(nameLocator).sendKeys(name);
    await driver.findElement(streetLocator).sendKeys(street);
    await driver.findElement(numderHouseLocator).sendKeys(numderHouse);
    await driver.findElement(flatLocator).sendKeys(flat);
    await driver.findElement(dayLocator).sendKeys(day);

    await driver.findElement(buttonLocator).click();

    const messageLocator = By.css(".form-result.result");
    const mesNameLocator = By.className("show-fio");
    const mesStreet = By.className("show-street");
    const mesNumderHouse = By.className("show-house");
    const mesFlat = By.className("show-flat");
    const mesDay = By.className("show-date");

    expect(
      await driver.findElement(messageLocator).isDisplayed(),
      "Result message is not shown"
    ).to.be.true;

    expect(await driver.findElement(mesNameLocator).getText()).to.include(
      name,
      "Wrong greeting text"
    );
    expect(await driver.findElement(mesStreet).getText()).to.include(
      street,
      "Wrong greeting text"
    );
    expect(await driver.findElement(mesNumderHouse).getText()).to.include(
      numderHouse,
      "Wrong greeting text"
    );
    expect(await driver.findElement(mesFlat).getText()).to.include(
      flat,
      "Wrong greeting text"
    );
    expect(await driver.findElement(mesDay).getText()).to.include(
      day,
      "Wrong greeting text"
    );
  });
});
