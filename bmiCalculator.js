//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function bmiCalculator(weight, height) {
  var calculateBmi = weight / Math.pow(height, 2);
  calculateBmi = Math.floor(calculateBmi);
  if (calculateBmi < 18.5) {
    return "Your BMI is " + calculateBmi + ", so you are underweight.";
  }
  if (calculateBmi >= 18.5 && calculateBmi <= 24.9) {
    return "Your BMI is " + calculateBmi + ", so you have normal weight.";
  } else {
    return "Your BMI is " + calculateBmi + ", so you are overweight.";
  }
}

console.log(bmiCalculator(80, 2));

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
