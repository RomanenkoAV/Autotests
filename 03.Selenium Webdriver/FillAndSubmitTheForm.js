const { Builder, By, until } = require("selenium-webdriver");
async function fillAndSubmitTheForm(user) {
    await driver.findElement(By.name("name")).sendKeys(user.name);
    await driver.findElement(By.name("email")).sendKeys(user.email);
    await driver.findElement(By.name("phone")).sendKeys(user.phone);
    await driver.findElement(By.className("button")).click();
  }
  module.exports = fillAndSubmitTheForm;