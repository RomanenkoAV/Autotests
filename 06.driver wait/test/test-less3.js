const { By, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Diary test", async function () {
  it("(1)", async function () {
    const testUrl = "http://qa.skillbox.ru/module15/bignotes/#/statistic";

    const articleMain = By.css("button.articlePreview__link");
    const articleTitle1 = By.css(
      ".vb-content .articlePreview:first-child .articlePreview__title"
    ); // Заголовок первой записи справа
    const articleTitle1Text = By.css(
      ".vb-content .articlePreview:first-child .articlePreview__text"
    ); // Текст первой записи справа
    const articleMainTitle1 = By.css(
      ".pageStatistic__list .articlePreview:first-child .articlePreview__title"
    ); // Заголовок первой записи по центру
    const articleMainTitle1Text = By.css(
      ".pageStatistic__list .articlePreview:first-child .articlePreview__text"
    ); // Текст первой записи по центру
    const basketMain = By.css(".pageArticle__buttons > button:nth-child(2)"); // Кнопка удаления
    const buttonFirstArticle = By.css(
      ".vb-content .articlePreview:nth-child(1) .articlePreview__link"
    ); // кнопка нажатия на первую запись справа
    const allArticle = By.css(".vb-content .articlePreview"); // Превью всех записей справа
    // const pageContent = By.css(".page__content.pageArticle__content"); // Превью записи по центру

    await driver.get(testUrl);
    const textTitleMainArticle = await driver
      .findElement(articleMainTitle1)
      .getText(); // записываем в переменную текст первой записи на гл странице
    const textTextMainArticle = await driver
      .findElement(articleMainTitle1Text)
      .getText();
    await driver.findElement(articleMain).click();
    await driver.wait(
      until.elementIsVisible(await driver.findElement(articleTitle1)),
      5000
    ); // ожидаем появление справа записи

    expect(await driver.findElement(articleTitle1).getText()).to.be.equal(
      textTitleMainArticle,
      "Wrong greeting text"
    ); // проверка на совпадение заголовка
    expect(await driver.findElement(articleTitle1Text).getText()).to.be.equal(
      textTextMainArticle,
      "Wrong greeting text"
    ); // проверка на совпадение текста

    await driver.findElement(basketMain).click(); // удаление первой записи

    await driver.findElement(buttonFirstArticle).click(); // нажатие на запись справа
    await driver.wait(
      until.elementIsVisible(await driver.findElement(articleTitle1)),
      5000
    ); // ожидание обновления страницы после нажатия
    await driver.findElement(basketMain).click(); // удаление второй записи
    await driver.wait(async () => {
      // ожидание исчезновения элемента
      const elements = await driver.findElements(allArticle); // либо заголовок первой записи справа (articleTitle1)
      if (elements.length == 0) {
        //console.log("Элемент отсутствует");
        return true;
      } else {
        //console.log("Элемент присутствует");
        return false;
      }
    }, 1000);
  });
});
