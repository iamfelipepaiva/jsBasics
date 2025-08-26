function bmiCalculator(weight, height) {

    var bmi = Math.round(weight/(height*height));

    return bmi;
}

console.log ("Your current BMI is " + bmiCalculator(50, 1.70) + "!");
