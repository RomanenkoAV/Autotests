const { Builder, By } = require("selenium-webdriver");
const { expect } = require("chai");
beforeEach(async function () {
  await driver.get("https://lm.skillbox.cc/qa_tester/module03/practice1/");
});

describe.only("Smoke test Shoes!", async function () {
  it("Trying diff loc strategy", async function () {
    this.timeout(20000);
    const size = 42;

    await driver.findElement(By.id("size")).sendKeys(size);
    await driver.findElement(By.tagName("button")).click();

    const Message = await driver.findElement(By.className("error")).getText();
    expect(Message).to.equal(
      "В нашем магазине есть обувь вашего размера",
      "Wrong greeting text"
    );
  });

  it("Negative", async function () {
    this.timeout(20000);
    const size = 33;

    await driver.findElement(By.id("size")).sendKeys(size);
    await driver.findElement(By.tagName("button")).click();

    const Message = await driver.findElement(By.id("size-error")).getText();
    expect(Message).to.equal(
      "В нашем магазине нет обуви вашего размера",
      "Wrong greeting text"
    );
  });
});
