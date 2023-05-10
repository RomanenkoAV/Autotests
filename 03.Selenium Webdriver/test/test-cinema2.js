const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Smoke test", async function () {
  this.timeout(15000);

  it("Trying diff loc strategy", async function () {
    this.timeout(20000);
    const email = "test@test.ru";
    const password = "Password!";

    await driver.get("https://lm.skillbox.cc/qa_tester/module05/practice1/");

    const emailField = await driver.findElement(By.className("form-input"));
    const passwordField = await driver.findElement(By.id("password"));
    const confirmPasswordField = await driver.findElement(
      By.name("confirm_password")
    );

    const registerButton = await driver.findElement(By.tagName("button"));

    await emailField.sendKeys(email);
    await passwordField.sendKeys(password);
    await confirmPasswordField.sendKeys(password);

    await registerButton.click();

    const resultHeader = await driver.findElement(By.tagName("h3"));
    const resultEmail = await driver.findElement(By.linkText(email));
    const resultEmailPar = await driver.findElement(By.partialLinkText(email));

    expect(await resultHeader.getText()).to.be.equal(
      "Спасибо за регистрацию!",
      "Wrong text for successfull registration"
    );
    expect(await resultEmail.getText()).to.be.equal(
      email,
      "Wrong text for successfull registration"
    );
  });
});
