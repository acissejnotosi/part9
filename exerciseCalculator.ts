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
  value1: Array<number>;
  value2: number;
}

const calculateExercises = function (period: Array<number>, targetAmount: number) {

  let totalHours = period.reduce((acc, curr) => acc += curr);
  let average = totalHours / period.length;

  const result: Exercises = {
    periodLength: period.length,
    trainingDays: period.map(day => day > 0).length,
    success: totalHours >= targetAmount ? true : false,
    average: average,
    target: targetAmount,
    rating: average < targetAmount ? 1 : average === targetAmount ? 2 : 3,
    ratingDescription: 1 ? 'It is a pitch you didn\'t go well, try next time' : 2 ? 'not too bad but could be better' : 'Awesome, you did a great job!'
  }

  return result;
}

const parseArguments = (args: Array<string>): InputValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Array.from(String(args[2]), Number),
      value2: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

try {
  const { value1, value2 } = parseArguments(process.argv);
  console.log(calculateExercises(value1, value2));
} catch (e) {
  console.log('Error, something bad happened, message: ', e.message);
}
