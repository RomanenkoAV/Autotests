const calculateCalories = require("../2.3 Function_Daily calorie intake");
const assert = require("assert");
describe("Testing function daily calorie intake", function () {
  it("Should calculate intake", function () {
    //actions
    const weight = 60;
    const height = 170;
    const age = 20;
    const sex = "male";
    const activityLevel = "active";

    const dailyCalIntake = calculateCalories(
      weight,
      height,
      age,
      sex,
      activityLevel
    );
    //assertions
    assert.deepStrictEqual(dailyCalIntake, 2926.0164999999997);
  });
});
