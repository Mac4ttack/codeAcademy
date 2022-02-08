let raceNumber = Math.floor(Math.random() * 1000);

//early registration check
let earlyReg = false;
//Runner's Age
let runAge = 18;

// This was done with Ternary operators to practice even if it isn't as readable as a switch/if block


runAge > 18 ?

  //if runner > 18 and early reg, assign higher race number and early start
  (earlyReg  ? (raceNumber += 1000 , console.log(`Your race will begin at 9:30 AM. Your race number is ${raceNumber}`))

  // else assign >18 runner later start
  : console.log(`Your race will begin at 11:00 AM. Your race number is ${raceNumber}`))

  // else if runner < 18 provide start
: (runAge < 18 ? console.log(`Your race will begin at 12:30 PM. Your race number is ${raceNumber}`)

  // if not, (18) see desk
:  console.log('Please see the registration desk'));

