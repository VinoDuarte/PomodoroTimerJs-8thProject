export function Timer({ 
  minutesDisplay,
  playButton,
  secondsDisplay,
  counting,
  minutes,
  seconds
}) {

function add() {
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
  
  
  if(minutesDisplay.textContent > 60) {
    minutesDisplay.textContent = 60
  }
  
  return
}

function subtract() {
  let minutes = Number(minutesDisplay.textContent)
  minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
  
  if(minutesDisplay.textContent < 0) {
    minutesDisplay.textContent = '00'
  }
}

function stop() {
  
  clearTimeout(counting)
  playButton.disabled = false
  secondsDisplay.textContent = '00'
  minutesDisplay.textContent = '25'
}


function Counter() {
  playButton.disabled = true
  counting = setTimeout(function() {
    minutes = Number(minutesDisplay.textContent)
    seconds = Number(secondsDisplay.textContent)
    
    if(seconds <= 0) {
      if(minutes <= 0) {
        playButton.disabled = false
        return;
      }
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
      seconds = 60
      
    }
    
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")
    
    Counter()
}, 1000)}

return {
  add,
  subtract,
  stop,
  Counter,
}
}