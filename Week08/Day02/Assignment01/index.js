function bmiCalc(w,h){
    let bmi= Math.round(w/(h**2)*10) / 10;
    if (bmi < 18.5) {
        alert("Your BMI is " +bmi + ", and you are underweight!")
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        alert("Your BMI is " +bmi + ", and you are normalweight!")
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        alert("Your BMI is "+bmi + ", and you are overweight!")
    }
    else if (bmi >= 30 && bmi <= 34.9) {
        alert("Your BMI is "+bmi + ", and you are obese!")
    }
    else {
        alert("Your BMI is "+bmi +", and you are extremely obese!")
    }
}
var weight = Number(prompt("Please enter you WEIGHT in kilogram: "));
var height = Number(prompt("Please enter you HEIGHT in meter: "));
bmiCalc(weight, height)