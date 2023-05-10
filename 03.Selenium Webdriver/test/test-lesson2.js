const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Smoke test", async function () {
  this.timeout(15000);

  it("Find elements", async function () {
    this.timeout(20000);

    await driver.get("http://qajava.skillbox.ru/");

    const feedBack = await driver.findElement(By.partialLinkText("Обратная"));
    const preOrders = await driver.findElement(By.linkText("Предзаказы"));
    const basket = await driver.findElement(By.className("book-add"));
    const countBasket = await driver.findElement(By.id("cart_count"));
    const books = await driver.findElement(By.id("genres"));
    const searchForm = await driver.findElement(By.name("search-input-form"));
  });
});
