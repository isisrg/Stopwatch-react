import { updateButtonsStyles, updateButtonsText } from "../../../../utils/buttons"
import { initialize } from "../../../../utils/initialize"
import { registerNewLap } from "../../../../utils/laps"
import "./lapResetButton.css"

export function LapResetButton(props) {
  function handleLapReset() {
    switch (props.state) {
      case "paused":
        initialize(props)
        break
      case "running":
        registerNewLap(props.lapNumber, props.setLapNumber, props.setLapEntries)
        props.setLapTimer({ displayTime: "00:00.00", milliseconds: 0, timerMilliseconds: 0, startingTime: Date.now() })
    }
  }

  return (
    <button id="lapResetButton" className={updateButtonsStyles(props.state, "lap-reset")} onClick={handleLapReset}>
      {updateButtonsText(props.state, "lap-reset")}
    </button>
  )
}
