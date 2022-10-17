export function updateTimeValues(timer) {
  let timerMilliseconds = Date.now() - timer.startingTime
  let startingTime = Date.now()
  let milliseconds = timer.milliseconds + timerMilliseconds
  let minutes = Math.floor(milliseconds / 60000)
  let seconds = Math.floor(milliseconds / 1000) % 60
  let hundredths = Math.floor((milliseconds % 1000) / 10)
  return { minutes, seconds, hundredths, milliseconds, timerMilliseconds, startingTime }
}

export function formatTimeValues(timer) {
  let minutes = timer.minutes.toString().padStart(2, "0")
  let seconds = timer.seconds.toString().padStart(2, "0")
  let hundredths = timer.hundredths.toString().padStart(2, "0")
  return { ...timer, minutes, seconds, hundredths }
}

export function updateAllTimeValues(mainTimer, setMainTimer, setLapTimer) {
  let newTimer = updateTimeValues(mainTimer)
  newTimer = formatTimeValues(newTimer)
  setMainTimer({
    minutes: newTimer.minutes,
    seconds: newTimer.seconds,
    hundredths: newTimer.hundredths,
    milliseconds: newTimer.milliseconds,
    timerMilliseconds: newTimer.milliseconds,
    startingTime: newTimer.startingTime,
  })

  setLapTimer((previousLapState) => {
    newTimer = updateTimeValues(previousLapState)
    newTimer = formatTimeValues(newTimer)

    return {
      minutes: newTimer.minutes,
      seconds: newTimer.seconds,
      hundredths: newTimer.hundredths,
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
