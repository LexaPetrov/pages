document.addEventListener("DOMContentLoaded", () => {
  const changeTime = time => {
    let interval = setInterval(() => {
      let min = document.querySelector(`.timerMin`).innerHTML
      let hour = document.querySelector(`.timerHour`).innerHTML
      let time1 = time
      if (time >= 0) {
        document.querySelector(`.timerSec`).innerHTML = time--
        document.querySelector(`.timerSec1`).innerHTML = time1--
      } else {
        document.querySelector(`.timerSec`).innerHTML = 59
        document.querySelector(`.timerSec1`).innerHTML = 59
        time = 59
        document.querySelector(`.timerSec`).innerHTML = time--
        document.querySelector(`.timerSec1`).innerHTML = time1--
        min = min - 1
        if (min >= 0) {
          document.querySelector(`.timerMin`).innerHTML = min--
          document.querySelector(`.timerMin1`).innerHTML = min--
        } else {
          document.querySelector(`.timerMin`).innerHTML = 59
          document.querySelector(`.timerMin1`).innerHTML = 59
          min = 59;
          document.querySelector(`.timerMin`).innerHTML = min--
          document.querySelector(`.timerMin1`).innerHTML = min--
          if (hour > 0) {
            hour = hour - 1;
            document.querySelector(`.timerHour`).innerHTML = hour
            document.querySelector(`.timerHour1`).innerHTML = hour
          } else {
            clearInterval(interval);
            document.querySelector(`.timerMin`).innerHTML = 00
            document.querySelector(`.timerSec`).innerHTML = 00
            document.querySelector(`.timerHour`).innerHTML = 00 
            document.querySelector(`.buyButton`).className = 'buyButton buyButtonDisabled'
            document.querySelector(`.timerMin1`).innerHTML = 00
            document.querySelector(`.timerSec1`).innerHTML = 00
            document.querySelector(`.timerHour1`).innerHTML = 00 
            document.querySelector(`.buyButton1`).className = 'buyButton buyButtonDisabled'
          }
        }
      }
    }, 1000)
  }
  let sec = 59
  changeTime(sec)
})

function toBuy() {
  document.getElementById('pdfcost').scrollIntoView({behavior: "smooth"});
}