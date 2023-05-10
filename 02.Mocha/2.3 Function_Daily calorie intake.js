function basalMetabolicRate(weight, height, age, sex) {
 if (sex == "male") {
   return 66.47 + 13.75 * weight + 5.003 * height - 4.676 * age;
 } else {
   return 655.1 + 9.563 * weight + 1.85 * height - 6.755 * age;
 }
}
 
function activeMetabolicRate(BMR, activityLevel) {
 switch (activityLevel) {
   case "none":
     return BMR * 1.2;
   case "little":
     return BMR * 1.375;
   case "active":
     return BMR * 1.775;
 }
}
 
function calculateCalories(weight, height, age, sex, activityLevel) {
 return activeMetabolicRate(
   basalMetabolicRate(weight, height, age, sex),
   activityLevel
 );
}
module.exports = calculateCalories;
