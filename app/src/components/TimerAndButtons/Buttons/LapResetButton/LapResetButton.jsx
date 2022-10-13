// $lapResetButton.onclick = () => {
//   switch (state) {
//     case "paused":
//       initialize()
//       break
//     case "running":
//       TODO: updateBestWorstLap()
//       TODO: ++lapNumber
//       TODO: lapTimer = { minutes: 0, seconds: 0, hundredths: 0, milliseconds: 0, startingTime: Date.now() }
//       TODO: registerNewLap()
//   }
// }

import { updateButtonsStyles, updateButtonsText } from "../../../../utils/buttons"
import { initialize } from "../../../../utils/initialize"
import "./lapResetButton.css"

export function LapResetButton(props) {
  function handleLapReset() {
    // if (props.state == "paused") initialize(props)
    switch (props.state) {
      case "paused":
        initialize(props)
        break
      case "running":
        console.log("lap")
        props.setLapTimer({ minutes: "00", seconds: "00", hundredths: "00", milliseconds: 0, timerMilliseconds: 0, startingTime: Date.now() })
        console.log(props.lapTimer)
      // create new lap
    }
  }
  return (
    <button id="lapResetButton" className={updateButtonsStyles(props.state, "lap-reset")} onClick={handleLapReset}>
      {updateButtonsText(props.state, "lap-reset")}
    </button>
  )
}
