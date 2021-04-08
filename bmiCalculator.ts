const calculateBmi = function (height: number, weigth: number): String {
  if (height === 0) throw new Error("Height is invalid");
  let bmi = weigth / (Math.pow(height / 100, 2));
  console.log(bmi);
  if (bmi <= 18.5)
    return 'Underweight'
  else if (bmi > 18.5 && bmi <= 24.9)
    return 'Normal (healthy weight)'
  else if (bmi >= 25.0 && bmi <= 29.9)
    return 'Overweight'
}

console.log(calculateBmi(180, 74));
