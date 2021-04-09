interface InputValues {
  value1: number;
  value2: number;
}

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

const parseArgumentsBmiCalculator = (args: Array<string>): InputValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

try {
  const { value1, value2 } = parseArgumentsBmiCalculator(process.argv);
  console.log(calculateBmi(value1, value2));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
