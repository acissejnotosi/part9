interface Exercises {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

interface InputValues {
  value1: number;
  value2: Array<number>;
}

const calculateExercises = function (targetAmount: number, period: Array<number>) {

  let totalHours = period.reduce((acc, curr) => acc += curr);
  let average = totalHours / period.length;
  let rating = average < targetAmount ? 1 : average === targetAmount ? 2 : 3;
  const result: Exercises = {
    periodLength: period.length,
    trainingDays: period.map(day => day > 0).length,
    success: totalHours >= targetAmount ? true : false,
    average: average,
    target: targetAmount,
    rating: rating,
    ratingDescription: rating === 1 ? 'It is a pitch you didn\'t go well, try next time' : rating === 2 ? 'not too bad but could be better' : 'Awesome, you did a great job!'
  }

  return result;
}

const parseArgumentsForCalculator = (args: Array<string>): InputValues => {
  if (args.length < 4) throw new Error('Not enough arguments');

  let values = args.filter((val, i) => {
    if (i >= 3 && i < args.length && !isNaN(Number(val))) {
      console.log(val);
      return Number(val)
    }
  })

  console.log('values', values);
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Array.from(values, Number)
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

try {
  const { value1, value2 } = parseArgumentsForCalculator(process.argv);
  console.log(calculateExercises(value1, value2));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
