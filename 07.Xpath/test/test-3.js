const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Book magazine Xpath", async function () {
  it("(1)", async function () {
    const testUrl = "http://qajava.skillbox.ru/index.html";

    const aboutUs = By.xpath("//a[@test-info='about-us']");
    const bestSellers = By.xpath("//h1[.='Бестселлеры']"); // Заголовок
    //const bestSellers2 = By.xpath("//li[not(@id='genres')]//*[.='Бестселлеры']"); // Ссылка в меню
    const searchInput = By.xpath("//input[@id='search-input']");

    const total = By.xpath("//*[@id='total']");
    const total2 = By.xpath("//*[@class='order-info']/div[2]"); // второй вариант Итого
    const yourOrder = By.xpath("//*[@class='order-info']/div[1]");
    const yourOrder2 = By.xpath("//*[.='Ваш заказ: ']"); // второй вариант Ваш заказ

    const cancel = By.xpath("//*[@class='filter-button']");
    const cancel2 = By.xpath("//button[.='Отменить']"); // второй вариант кнопки отмена
  });
});
