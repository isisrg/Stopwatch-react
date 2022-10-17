export function updateTimeValues(timer) {
  const timerMilliseconds = Date.now() - timer.startingTime
  const startingTime = Date.now()
  const milliseconds = timer.milliseconds + timerMilliseconds
  const minutes = Math.floor(milliseconds / 60000)
  const seconds = Math.floor(milliseconds / 1000) % 60
  const hundredths = Math.floor((milliseconds % 1000) / 10)
  return { minutes, seconds, hundredths, milliseconds, timerMilliseconds, startingTime }
}

export function formatTimeValues(timer) {
  const minutes = timer.minutes.toString().padStart(2, "0")
  const seconds = timer.seconds.toString().padStart(2, "0")
  const hundredths = timer.hundredths.toString().padStart(2, "0")
  const displayTime = minutes + ":" + seconds + "." + hundredths
  return { displayTime, milliseconds: timer.milliseconds, timerMilliseconds: timer.timerMilliseconds, startingTime: timer.startingTime }
}

export function updateAllTimeValues(mainTimer, setMainTimer, setLapTimer) {
  let newTimer = updateTimeValues(mainTimer)
  newTimer = formatTimeValues(newTimer)
  setMainTimer({
    displayTime: newTimer.displayTime,
    milliseconds: newTimer.milliseconds,
    timerMilliseconds: newTimer.milliseconds,
    startingTime: newTimer.startingTime,
  })

  setLapTimer((previousLapState) => {
    newTimer = updateTimeValues(previousLapState)
    newTimer = formatTimeValues(newTimer)
    return {
      displayTime: newTimer.displayTime,
      milliseconds: newTimer.milliseconds,
      timerMilliseconds: newTimer.timerMilliseconds,
      startingTime: newTimer.startingTime,
    }
  })
}

export function initializeTimers(mainTimer, setMainTimer, lapTimer, setLapTimer) {
  setMainTimer({ ...mainTimer, startingTime: Date.now() })
  setLapTimer({ ...lapTimer, startingTime: Date.now() })
}
