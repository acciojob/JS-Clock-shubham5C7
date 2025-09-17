const seconds = document.querySelector(".hand.second-hand");
const minutes = document.querySelector(".hand.min-hand");
const hours = document.querySelector(".hand.hour-hand");

function updateClock(){
    const now = new Date();

    const CurrSec = now.getSeconds();
    const CurrMin = now.getMinutes();
    const CurrHours = now.getHours();

    let SecRotate = (6 * CurrSec) + 90;
  let MinRotate = (6 * CurrMin) + 90;
  let HourRotate = (30 * CurrHours + (CurrMin / 60) * 30) + 90;

  seconds.style.transform = `rotate(${SecRotate}deg)`;
  minutes.style.transform = `rotate(${MinRotate}deg)`;
  hours.style.transform = `rotate(${HourRotate}deg)`;
}
updateClock()
setInterval(updateClock, 1000); 


