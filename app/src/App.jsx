import { useEffect, useState } from "react"
import "./App.css"
import { TimerAndButtons } from "./components/TimerAndButtons/TimerAndButtons"
import { LapTable } from "./components/LapTable/LapTable"
import { BottomMenu } from "./components/BottomMenu/BottomMenu"
import { updateAllTimeValues } from "./utils/timers"
import { updateBestWorstLapValues, updateLapEntries } from "./utils/laps"

function App() {
  const [state, setState] = useState("onZero")
  const [timerId, setTimerId] = useState()
  const [mainTimer, setMainTimer] = useState({ displayTime: "00:00.00", milliseconds: 0, timerMilliseconds: 0, startingTime: 0 })
  const [lapTimer, setLapTimer] = useState({ displayTime: "00:00.00", milliseconds: 0, timerMilliseconds: 0, startingTime: 0 })
  const [lapNumber, setLapNumber] = useState(0)
  const [lapEntries, setLapEntries] = useState([])
  const [bestWorstLapInfo, setBestWorstLapInfo] = useState({
    bestLapPosition: 0,
    bestLapMilliseconds: null,
    worstLapPosition: 0,
    worstLapMilliseconds: null,
  })

  useEffect(() => {
    switch (state) {
      case "running":
        setTimerId(setInterval(() => updateAllTimeValues(mainTimer, setMainTimer, setLapTimer), 1000 / 60))
        break
      case "paused":
        clearInterval(timerId)
    }
  }, [state])

  useEffect(() => {
    if (lapTimer.milliseconds > 0) updateLapEntries(lapTimer, setLapEntries)
  }, [lapTimer])

  useEffect(() => {
    if (lapNumber > 1) updateBestWorstLapValues(lapEntries[lapEntries.length - 2], bestWorstLapInfo, setBestWorstLapInfo)
  }, [lapNumber])

  return (
    <div id="appContainer">
      <TimerAndButtons
        state={state}
        setState={setState}
        mainTimer={mainTimer}
        setMainTimer={setMainTimer}
        lapTimer={lapTimer}
        setLapTimer={setLapTimer}
        lapNumber={lapNumber}
        setLapNumber={setLapNumber}
        lapEntries={lapEntries}
        setLapEntries={setLapEntries}
        bestWorstLapInfo={bestWorstLapInfo}
        setBestWorstLapInfo={setBestWorstLapInfo}
      />
      <LapTable lapEntries={lapEntries} bestWorstLapInfo={bestWorstLapInfo} />
      <BottomMenu />
    </div>
  )
}

export default App
