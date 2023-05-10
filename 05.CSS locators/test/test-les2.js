const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Test books magazine", async function () {
  it("Search locate (2)", async function () {
    const testUrl = "http://qajava.skillbox.ru/index.html";

    const divFooter = By.css("footer#footer > div"); // локатор div дочерних к футеру

    const nextLi = By.css("li#genres + *"); // локатор любого тега, который расположен сразу после <li id="genres">

    await driver.get(testUrl);
    await driver.findElement(By.css("a[href^='search']")).click(); // нажатие на кнопку поиск

    const nextDiv = By.css("div.filter-container ~ *"); // любые теги, которые расположены после <div class="filter-container">
  });
});
