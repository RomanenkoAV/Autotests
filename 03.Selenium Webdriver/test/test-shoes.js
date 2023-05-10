const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Smoke test Shoes!", async function () {
  this.timeout(15000);

  it("Trying diff loc strategy", async function () {
    this.timeout(20000);
    const size = 42;

    await driver.get("https://lm.skillbox.cc/qa_tester/module03/practice1/");

    await driver.findElement(By.id("size")).sendKeys(size);
    await driver.findElement(By.tagName("button")).click();

    const Message = await driver.findElement(By.className("error")).getText();
    expect(Message).to.equal(
      "В нашем магазине есть обувь вашего размера",
      "Wrong greeting text"
    );
  });
});
