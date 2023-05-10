const getRefundTicketPricePercent = require("../2.5 Function_Percentage of the ticket price upon return.js");
const assert = require("assert");
describe("Testing function percentage of the ticket price upon return", function () {
  it("Should calculate percentage1 of the ticket price upon return", function () {
    //actions
    const hours = 999;
    const cancel = false;
    const recheduled = false;
    const percentage1 = getRefundTicketPricePercent(hours, cancel, recheduled);
    //assertions
    assert.deepStrictEqual(percentage1, 100);
  });
  it("Should calculate percentage2 of the ticket price upon return", function () {
    //actions
    const percentage2 = getRefundTicketPricePercent(0, true, true);
    //assertions
    assert.deepStrictEqual(percentage2, 100);
  });
  it("Should calculate percentage3 of the ticket price upon return", function () {
    //actions
    const percentage3 = getRefundTicketPricePercent(144, false, false);
    //assertions
    assert.deepStrictEqual(percentage3, 50);
  });
  it("Should calculate percentage4 of the ticket price upon return", function () {
    //actions
    const percentage4 = getRefundTicketPricePercent(73, false, false);
    //assertions
    assert.deepStrictEqual(percentage4, 30);
  });
  it("Should calculate percentage5 of the ticket price upon return", function () {
    //actions
    const percentage5 = getRefundTicketPricePercent(1, false, false);
    //assertions
    assert.deepStrictEqual(percentage5, 0);
  });
  
});
