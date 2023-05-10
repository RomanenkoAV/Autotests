const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Home theater XPath", async function () {
  it("(1)", async function () {
    const testUrl = "http://qa.skillbox.ru/module19/";

    const arrowPrev = By.xpath("//span[@class='da-arrows-prev']");
    const linkButton = By.xpath("//a[@class='da-link button']");
    const notActiveFilter = By.xpath("//li[@class='filter']");
    const classButton = By.xpath("//*[starts-with(@class, 'button')]");
    const subsribeButton = By.xpath("//a[.='Подписаться сейчас']");
    const ourClients = By.xpath("//ul[@id='clint-slider']//img");
    const priceColumn = By.xpath(
      "//*[contains(@class,'span4 price-column')]/following-sibling::*"
    );
    const inputSpan = By.xpath("//input[@class='span12']");

    await driver.get(testUrl);

    // доп проверка нахождения элементов
    await driver.findElement(arrowPrev);
    await driver.findElement(linkButton);
    await driver.findElement(notActiveFilter);
    await driver.findElement(classButton);
    await driver.findElement(subsribeButton);
    await driver.findElement(ourClients);
    await driver.findElement(priceColumn);
    await driver.findElement(inputSpan);
  });
});
