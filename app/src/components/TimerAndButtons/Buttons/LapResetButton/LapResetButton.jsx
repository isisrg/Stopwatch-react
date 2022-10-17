// $lapResetButton.onclick = () => {
//   switch (state) {
//     case "paused":
//       initialize()
//       break
//     case "running":
//       TODO: updateBestWorstLap()
//       ++lapNumber
//       lapTimer = { minutes: 0, seconds: 0, hundredths: 0, milliseconds: 0, startingTime: Date.now() }
//       registerNewLap()
//   }
// }

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
        // props.setLapTimer({ minutes: "00", seconds: "00", hundredths: "00", milliseconds: 0, timerMilliseconds: 0, startingTime: Date.now() })
        registerNewLap(props.lapNumber, props.setLapNumber, props.setLapEntries)
        props.setLapTimer({ minutes: "00", seconds: "00", hundredths: "00", milliseconds: 0, timerMilliseconds: 0, startingTime: Date.now() })
        console.log("LAP: ", props.lapTimer)
    }
  }

  return (
    <button id="lapResetButton" className={updateButtonsStyles(props.state, "lap-reset")} onClick={handleLapReset}>
      {updateButtonsText(props.state, "lap-reset")}
    </button>
  )
}
