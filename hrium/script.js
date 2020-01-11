document.addEventListener("DOMContentLoaded", () => {
  const changeTime = time => {
    let interval = setInterval(() => {
      let min = document.querySelector(`.timerMin`).innerHTML
      let hour = document.querySelector(`.timerHour`).innerHTML
      if (time >= 0) {
        document.querySelector(`.timerSec`).innerHTML = time--
      } else {
        document.querySelector(`.timerSec`).innerHTML = 59
        time = 59
        document.querySelector(`.timerSec`).innerHTML = time--
        min = min - 1
        if (min >= 0) {
          document.querySelector(`.timerMin`).innerHTML = min--
        } else {
          document.querySelector(`.timerMin`).innerHTML = 59
          min = 59;
          document.querySelector(`.timerMin`).innerHTML = min--
          if (hour > 0) {
            hour = hour - 1;
            document.querySelector(`.timerHour`).innerHTML = hour
          } else {
            clearInterval(interval);
            document.querySelector(`.timerMin`).innerHTML = 00
            document.querySelector(`.timerSec`).innerHTML = 00
            document.querySelector(`.timerHour`).innerHTML = 00
          }
        }
      }
    }, 1000)
  }
  let sec = 59
  changeTime(sec)
})