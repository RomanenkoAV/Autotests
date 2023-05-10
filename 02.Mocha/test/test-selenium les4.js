const { Builder, By, until } = require("selenium-webdriver");
const { expect } = require("chai");
describe.only("Welcome screen test", async function () {
  this.timeout(15000);
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  it("(1)Should show greeting after entering user name", async function () {
    this.timeout(20000);
    const user = "Иван Иванович Иванов";
    const email = "test@test.ru";
    const telefon = "+79999999999";
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await driver.findElement(By.name("name")).sendKeys(user);
    await driver.findElement(By.name("email")).sendKeys(email);
    await driver.findElement(By.name("phone")).sendKeys(telefon);
    await driver.findElement(By.className("button")).click();
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(`Здравствуйте, ${user}.
На вашу почту (${email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${telefon}.`);
  });

  it("(2)Should show greeting after entering user name", async function () {
    this.timeout(20000);
    const user = "";
    const email = "test@test.ru";
    const telefon = "+79999999999";
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await driver.findElement(By.name("name")).sendKeys(user);
    await driver.findElement(By.name("email")).sendKeys(email);
    await driver.findElement(By.name("phone")).sendKeys(telefon);
    await driver.findElement(By.className("button")).click();
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(`Здравствуйте, ${user}.
На вашу почту (${email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${telefon}.`);
  });

  it("(3)Should show greeting after entering user name", async function () {
    this.timeout(20000);
    const user = "Иван Иванович Иванов";
    const email = "";
    const telefon = "+79999999999";
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await driver.findElement(By.name("name")).sendKeys(user);
    await driver.findElement(By.name("email")).sendKeys(email);
    await driver.findElement(By.name("phone")).sendKeys(telefon);
    await driver.findElement(By.className("button")).click();
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(`Здравствуйте, ${user}.
На вашу почту (${email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${telefon}.`);
  });

  it("(4)Should show greeting after entering user name", async function () {
    this.timeout(20000);
    const user = "Иван Иванович Иванов";
    const email = "test@test.ru";
    const telefon = "";
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    await driver.findElement(By.name("name")).sendKeys(user);
    await driver.findElement(By.name("email")).sendKeys(email);
    await driver.findElement(By.name("phone")).sendKeys(telefon);
    await driver.findElement(By.className("button")).click();
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(`Здравствуйте, ${user}.
На вашу почту (${email}) отправлено письмо.
Наш сотрудник свяжется с вами по телефону: ${telefon}.`);
  });

  it("(5)Should show greeting after entering user name", async function () {
    this.timeout(20000);
    // const user = "Иван Иванович Иванов";
    // const email = "test@test.ru";
    // const telefon = "+79999999999";
    await driver.get("https://lm.skillbox.cc/qa_tester/module02/homework1/");
    // await driver.findElement(By.name("name")).sendKeys(user);
    // await driver.findElement(By.name("email")).sendKeys(email);
    // await driver.findElement(By.name("phone")).sendKeys(telefon);
    await driver.findElement(By.className("button")).click();
    const welcomeMessage = await driver
      .findElement(By.className("start-screen__res"))
      .getText();
    expect(welcomeMessage).to.equal(`Здравствуйте, .
На вашу почту () отправлено письмо.
Наш сотрудник свяжется с вами по телефону: .`);
  });

  after(async function () {
    await driver.quit();
  });
});
