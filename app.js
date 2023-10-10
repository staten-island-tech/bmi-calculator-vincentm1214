const name = prompt("Enter your name");
const weight = Number(prompt("Enter your weight in kilograms"));
const height = Number(prompt("Enter your height in centimeters"));
function BMI() {
return (weight / (height / 100)**2);
}
const bmi = BMI();


console.log("Your BMI is " + bmi)


function result(BMI) {
if (BMI < 18.5) {
console.log("You're underweight")
}
else if (BMI >= 18.5 && x < 24.9) {
console.log("You're fine")
}
else {
console.log("You're overweight")
}


}
result(BMI)