// to access element by Id  for all buttons(start, stop, reset) and timer and store in a variable
const start= document.getElementById('start'); 
const stopbttn= document.getElementById('stop');
const reset= document.getElementById('reset');
const timer= document.getElementById('timer_set'); 
// assigned null to set timer not started 
let timerId = null;
let hour=0; // assign the hour time to 0
let min= 0; // assign the minute time to 0
let sec=0;  // assign the second time to 0

//function to show the working or process behind timer
function startProcess(){
  //check for the second value and increment till 60
  if (sec < 60) {
    sec++;
    // second value reach to 60 then get reset to 0 and minute get increment by 1
    if (sec == 60) {
      min += 1;
      sec = 0;
      //minute value reach to 60 then get reset to 0 and hour get increment by 1
      if (min == 60) {
        hour += 1;
        min = 0;
      }
    }
  }
  let hours = hour < 10 ? "0" + hour : hour; // check if the hour is less than 10, if true then '0' is added before the hour value else it print the exact hour value
  let minute = min < 10 ? "0" + min : min; // check if the min is less than 10, if true then '0' is added before the min value else it print the exact min value
  let second = sec < 10 ? "0" + sec : sec; // check if the sec is less than 10, if true then '0' is added before the sec value else it print the exact sec value

  // display of updated time
  timer.innerHTML = hours + ":" + minute + ":" + second;
}

//function to start the timer
function startTimer(){
    // check if the timer is already running and to stop the timer
    if (timerId!== null){
       clearInterval(timerId); 
    }
    //continuous implementation of the startProcess function after every 1sec
    timerId= setInterval(startProcess,1000);
}
 
//function to stop the timer
function stopTimer(){
    clearInterval(timerId);
}

//function to stop and reset the value to 00:00:00 
function resetTimer(){
    clearInterval(timerId);
    timer.innerHTML = "00:00:00";
}

// to set functionality on click of button
start.addEventListener('click',startTimer);
stopbttn.addEventListener('click', stopTimer);
reset.addEventListener('click',resetTimer);
