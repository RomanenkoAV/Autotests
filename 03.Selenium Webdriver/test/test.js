const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
const fillAndSubmitTheForm = require("../FillAndSubmitTheForm.js");

describe("Welcome screen test", async function () {
  this.timeout(15000);

  it("Positive", async function () {
    this.timeout(20000);
    user = {
      name: "Иван Иванович Иванов",
      email: "test@test.ru",
      phone: "+79999999999",
    };
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await fillAndSubmitTheForm(user);
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(
      `Здравствуйте, ${user.name}.
На вашу почту (${user.email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${user.phone}.`,
      "Wrong greeting text"
    );
  });

  it("Negative 1", async function () {
    this.timeout(20000);
    user = {
      name: "",
      email: "test@test.ru",
      phone: "+79999999999",
    };
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await fillAndSubmitTheForm(user);
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(
      `Здравствуйте, ${user.name}.
На вашу почту (${user.email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${user.phone}.`,
      "Wrong greeting text"
    );
  });

  it("Negative 2", async function () {
    this.timeout(20000);
    user = {
      name: "Иван Иванович Иванов",
      email: "",
      phone: "+79999999999",
    };
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await fillAndSubmitTheForm(user);
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(
      `Здравствуйте, ${user.name}.
На вашу почту (${user.email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${user.phone}.`,
      "Wrong greeting text"
    );
  });

  it("Negative 3", async function () {
    this.timeout(20000);
    user = {
      name: "Иван Иванович Иванов",
      email: "test@test.ru",
      phone: "",
    };
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await fillAndSubmitTheForm(user);
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(
      `Здравствуйте, ${user.name}.
На вашу почту (${user.email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${user.phone}.`,
      "Wrong greeting text"
    );
  });

  it("Negative 4", async function () {
    this.timeout(20000);
    user = {
      name: "",
      email: "",
      phone: "",
    };
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await fillAndSubmitTheForm(user);
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(
      `Здравствуйте, ${user.name}.
На вашу почту (${user.email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${user.phone}.`,
      "Wrong greeting text"
    );
  });
});
