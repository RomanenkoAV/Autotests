const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Smoke test", async function () {
  this.timeout(15000);

  it("Count elements", async function () {
    this.timeout(20000);

    await driver.get("http://qajava.skillbox.ru/");

    const card = await driver.findElements(By.className("book-info"));

    expect(card.length).to.be.equal(15, "Count is wrong");
  });
});
