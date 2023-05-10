const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Online institute XPath", async function () {
  it("(1)", async function () {
    const testUrl = "http://qa.skillbox.ru/module16/maincatalog/";

    const title5 = By.xpath(
      "//div[@class='baseCard pageCreate__card'][5]//span[@class='baseCard__title']"
    );

    const lastPeriod = By.xpath(
      "//div[@class='baseCard pageCreate__card'][last()]//div[@class='baseCondition'][3]/p"
    );

    const parentDiv = By.xpath("//a[@href='#']/parent::div");

    const parentDiv5 = By.xpath(
      "//div[@class='baseCard pageCreate__card'][5]//a[@href='#']/parent::div"
    );

    const titleParents = By.xpath(
      "//div[@class='pageCreate__title']/ancestor::*"
    );

    await driver.get(testUrl);

    // доп проверка нахождения элементов
    await driver.findElement(title5);
    await driver.findElement(lastPeriod);
    await driver.findElement(parentDiv);
    await driver.findElement(parentDiv5);
    await driver.findElement(titleParents);
  });
});
