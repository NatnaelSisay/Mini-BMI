const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const weight = document.querySelector("#weight");
  const height = document.querySelector("#height");

  if (weight.value == 0 || height.value == 0) {
    document.querySelector("#result").innerText = "Invalid Input";
    return;
  }

  const bmi = weight.value / ((height.value / 100) ** 2);
  document.querySelector("#result").innerText = "Your BMI is : " + bmiInformationMessage(bmi);

});

const bmiInformationMessage = (bmi) => {
  let displayText = "";

  if (bmi > 40) {
    displayText = "Very severly obese";
  } else if (bmi > 35) {
    displayText = "Severy obese";
  } else if (bmi > 30) {
    displayText = "Moderately Obese";
  } else if (bmi > 25) {
    displayText = "Overweight";
  } else if (bmi > 18.5) {
    displayText = "Normal";
  } else if (bmi > 16) {
    displayText = "Underweight";
  } else if (bmi > 15) {
    displayText = "Severely Underweight";
  } else {
    displayText = "Very severely underweight";
  }

  return displayText;
};
