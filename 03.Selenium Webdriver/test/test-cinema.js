const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Smoke test", async function () {
  this.timeout(15000);

  it("Trying diff loc strategy", async function () {
    this.timeout(20000);
    const email = "test@test.ru";

    await driver.get("https://lm.skillbox.cc/qa_tester/module05/practice1/");

    const emailField = await driver.findElement(By.className("form-input"));
    const passwordField = await driver.findElement(By.id("password"));
    const confirmPasswordField = await driver.findElement(
      By.name("confirm_password")
    );
  });
});
