const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Test books magazine", async function () {
  it("Search locate", async function () {
    const testUrl = "http://qajava.skillbox.ru/index.html";

    const aboutMag = By.css("[test-info='about-us']"); // локатор "О магазине"
    const emptyA = By.css("a[href='']"); // локатор пустых ссылок

    await driver.get(testUrl);
    await driver.findElement(By.css("a[href^='search']")).click(); //нажатие на кнопку поиск

    const optSel = By.css("option[selected]"); // локатор всех элементов с тегом option и с атрибутом selected

    await driver.findElement(By.css("a[href^='index']")).click(); //обратно на главную страницу

    const bookPrice = By.css("div.book-price"); // локатор для элемента <div class="book-price">
    const buttonBook = By.css("button[class^='book']"); // локатор для всех элементов с тегом button и с атрибутом class, начинающимся на "book"
    const mainClass = By.css("[class$='main']"); // локатор для всех элементов, у которых атрибут class заканчивается на "main".
    const aMenu = By.css("a[class*='menu']"); // локатор для всех элементов с тегом a и с атрибутом class, содержащим в себе слово "menu".
  });
});
