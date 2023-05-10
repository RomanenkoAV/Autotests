const { By } = require("selenium-webdriver");
const { expect } = require("chai");

describe("Find elements lesson1", async function () {
  it("A", async function () {
    const pLocator = By.css("section.header p");
  });

  it("B", async function () {
    const aLocator = By.css("div.text > a:first-child");
  });

  it("C", async function () {
    const aLocator2 = By.css("section > .text:nth-child(3) > a");
    const aLocator2V2 = By.css("section :nth-child(3) > a");
  });
});
