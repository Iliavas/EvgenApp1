let innerTime = 0;

async function timer(time) {
  timer = document.getElementById('timer');
  timer.hidden = false;
  innerTime = time;
  await new Promise((resolve, reject) =>{timerInterval = setInterval(() => {
    innerTime -=1;
    timer.innerHTML = (Math.floor(innerTime/60)).toString() + ":" + (innerTime%60).toString();
    if (innerTime == 0){ clearInterval(timerInterval);  resolve(); return;}
  }, 1000);

});
return Promise.resolve(1);}

function stop() {
  innerTime = 1;
}

module.exports = {
  timer: timer,
  stop: stop
}