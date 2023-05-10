const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe.only("Test club socks", async function () {
  it("Search locate (3)", async function () {
    const testUrl = "http://qajava.skillbox.ru/module05/auth/index.html/";

    const h1Section = By.css(
      "section.important-section-block[for^='main'] > h1:first-child"
    ); // локатор первого дочернего к тегу section

    const lastP = By.css("form.form#login-form > p:last-child"); // локатор любого тега, который расположен сразу после <li id="genres">

    const nthChild = By.css("body > *:nth-child(3)"); // локатор 3-го любого вложенного в body

    const footerA = By.css("div.footer__menuList > a:first-of-type"); //Все элементы <a> у родителя <div class="footer__menuList">

    const last = By.css(
      "div.footer__menu > div.footer__menuList:first-child > a:first-of-type"
    ); // доп

    await driver.get(testUrl);
  });
});
