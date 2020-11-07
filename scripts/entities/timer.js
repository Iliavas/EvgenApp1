async function timer(time) {
  timer = document.getElementById('timer');
  innerTime = time;
  await new Promise((resolve, reject) =>{timerInterval = setInterval(() => {
    console.log(innerTime);
    innerTime -=1;
    timer.innerHTML = (Math.floor(innerTime/60)).toString() + ":" + (innerTime%60).toString();
    if (innerTime == 0){ clearInterval(timerInterval);  resolve();console.log('what'); return;}
  }, 1000);

});   console.log('fuck');
return Promise.resolve(1);}

module.exports = {
  timer: timer
}