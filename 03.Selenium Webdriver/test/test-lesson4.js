const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Smoke test", async function () {
  this.timeout(15000);

  it("Web test film and serials", async function () {
    this.timeout(20000);
    const film = "Seven";
    const serial = "True detective";

    await driver.get("https://lm.skillbox.cc/qa_tester/module07/practice3/");

    await driver.findElement(By.name("films")).sendKeys(film);
    await driver.findElement(By.name("serials")).sendKeys(serial);

    await driver.findElement(By.className("section__button")).click();
    await driver.findElement(By.id("two")).click();
    await driver.findElement(By.className("section__button")).click();
    await driver.findElement(By.id("ok")).click();

    const filmMessage = await driver
      .findElement(By.className("result__text"))
      .getText();
    expect(filmMessage).to.equal(film, "Wrong greeting text");
    const serialMessage = await driver
      .findElement(By.id("best_serials"))
      .getText();
    expect(serialMessage).to.equal(serial, "Wrong greeting text");
  });

  it("(2)Web test film and serials", async function () {
    this.timeout(20000);
    const film = "Interstellar";
    const serial = "Wayne";

    await driver.get("https://lm.skillbox.cc/qa_tester/module07/practice3/");

    await driver.findElement(By.name("films")).sendKeys(film);
    await driver.findElement(By.id("serials")).sendKeys(serial);

    await driver.findElement(By.className("section__button")).click();
    await driver.findElement(By.id("two")).click();

    await driver.findElement(By.className("fake-checkbox")).click();
    await driver.findElement(By.className("fake-radiobutton")).click();

    await driver.findElement(By.className("section__button")).click();
    await driver.findElement(By.id("ok")).click();

    const filmMessage = await driver.findElement(By.id("best_films")).getText();
    expect(filmMessage).to.equal(film, "Wrong greeting text");
    const serialMessage = await driver
      .findElement(By.id("best_serials"))
      .getText();
    expect(serialMessage).to.equal(serial, "Wrong greeting text");

    const lang = await driver.findElement(By.id("language")).getText();
    expect(lang).to.equal("С русскими субтитрами", "Wrong greeting text");
    const age = await driver.findElement(By.id("age")).getText();
    expect(age).to.equal("10-17", "Wrong greeting text");
  });

  it("(3)Web test film and serials", async function () {
    this.timeout(20000);
    const film = "";
    const serial = "";

    await driver.get("https://lm.skillbox.cc/qa_tester/module07/practice3/");

    await driver.findElement(By.name("films")).sendKeys(film);
    await driver.findElement(By.id("serials")).sendKeys(serial);

    await driver.findElement(By.className("section__button")).click();
    await driver.findElement(By.id("two")).click();

    await driver.findElement(By.className("fake-checkbox")).click();
    await driver.findElement(By.className("fake-checkbox")).click();
    await driver.findElement(By.className("fake-radiobutton")).click();

    await driver.findElement(By.className("section__button")).click();
    await driver.findElement(By.id("ok")).click();

    const filmMessage = await driver.findElement(By.id("best_films")).getText();
    expect(filmMessage).to.equal(film, "Wrong greeting text");
    const serialMessage = await driver
      .findElement(By.id("best_serials"))
      .getText();
    expect(serialMessage).to.equal(serial, "Wrong greeting text");

    const lang = await driver.findElement(By.id("language")).getText();
    expect(lang).to.equal("", "Wrong greeting text");
    const age = await driver.findElement(By.id("age")).getText();
    expect(age).to.equal("10-17", "Wrong greeting text");
  });
});
