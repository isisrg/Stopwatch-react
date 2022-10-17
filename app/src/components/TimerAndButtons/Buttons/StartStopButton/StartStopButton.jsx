import { updateButtonsStyles, updateButtonsText } from "../../../../utils/buttons"
import { registerNewLap } from "../../../../utils/laps"
import { updateState } from "../../../../utils/state"
import { initializeTimers } from "../../../../utils/timers"
import "./startButton.css"
import "./stopButton.css"

export function StartStopButton(props) {
  function handleStartStop() {
    switch (props.state) {
      case "onZero":
        initializeTimers(props.mainTimer, props.setMainTimer, props.lapTimer, props.setLapTimer)
        registerNewLap(props.lapNumber, props.setLapNumber, props.lapEntries, props.setLapEntries)
        break
      case "paused":
        initializeTimers(props.mainTimer, props.setMainTimer, props.lapTimer, props.setLapTimer)
    }
    props.setState(updateState(props.state))
  }
  return (
    <button id="startStopButton" className={updateButtonsStyles(props.state, "start-stop")} onClick={handleStartStop}>
      {updateButtonsText(props.state, "start-stop")}
    </button>
  )
}
