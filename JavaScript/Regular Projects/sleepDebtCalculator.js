//edit this to change what is considered a good night's rest
const idealHours = 6

//pulls in day to retrieve user's sleep
function getSleepHours(day) {
  switch (day) {
    case 'Monday':
      return 8;
    case 'Tuesday':
      return 7;
    case 'Wednesday':
      return 6;
    case 'Thursday':
      return 5;
    case 'Friday':
      return 4;
    case 'Saturday':
      return 9;
    case 'Sunday':
      return 10;
    default:
      'Invalid day'
  }
}

//add up each day of the week
const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

//determine what good sleep hours for the week is
const getIdealSleepHours = (idealHours) => idealHours * 7;
 
//calculate sleep debt and return to user
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours()
  const idealSleepHours = getIdealSleepHours(idealHours)
if (actualSleepHours > idealSleepHours) {
    return `You got ${actualSleepHours - idealSleepHours} more hours sleep than was needed.`
  } else if (actualSleepHours < idealSleepHours) {
    return `You got ${idealSleepHours - actualSleepHours} less hours than was needed. Get some rest.`
  } else {
    return "You got the perfect amount of sleep. Great Job!"
  }
}

console.log(calculateSleepDebt());