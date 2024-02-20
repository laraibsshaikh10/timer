// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//The set interval can keep track of the time
//setTimeout can be used to trigger a beep
//use the process.stdout.write('\x07') to ring a beep

//to retain the arguments from the node
const timerArguments = process.argv.slice(2);

const alarmClock = function(timeIntervals) {
  //to make sure timer intervals are actual numbers and greater than zero
  const validTimeIntervals = timeIntervals.map(Number).filter(num => num >= 0 && !isNaN(num));

  //sort the timer intervals in ascending order
  validTimeIntervals.sort((a, b) => a - b);

  //for all the times provided that are valid, set an alarm
  validTimeIntervals.forEach(time => {
    setTimeout(() => {
      
      process.stdout.write(`Alarm at: ${time} seconds\n`);
      //sound a beep
      process.stdout.write('\x07');
      
    }, time * 1000); //to convert the time in seconds into milliseconds
    
  });
};


//calling the function with the timerArguments provided within the node
alarmClock(timerArguments);

