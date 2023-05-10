const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
describe.only("Welcome screen test", async function () {
  this.timeout(15000);
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  it("Should show greeting after entering user name", async function () {
    this.timeout(20000);
    const userName = "Вася";
    await driver.get("https://lm.skillbox.cc/qa_tester/module01/");
    await driver.findElement(By.name("name")).sendKeys(userName);
    await driver.findElement(By.className("button")).click();
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(`Привет, ${userName}!`);
    //await driver.quit();
  });
  after(async function () {
    await driver.quit();
  });
});
