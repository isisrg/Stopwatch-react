// $startStopButton.onclick = () => {
//   switch (state) {
//     case "onZero":
//       updateButtonsStyles()
//       TODO: registerNewLap()
//       updateState()
//       initializeTimers()
//       timerId = requestAnimationFrame(updateAllTimeValues)
//       break
//     case "paused":
//       updateButtonsStyles()
//       updateState()
//       timerId = requestAnimationFrame(updateAllTimeValues)
//       break
//     case "running":
//       updateButtonsStyles()
//       cancelAnimationFrame(timerId)
//       updateState()
//   }
// }

import { updateButtonsStyles, updateButtonsText } from "../../../../utils/buttons"
import { updateState } from "../../../../utils/state"
import { initializeTimers } from "../../../../utils/timers"
import "./startButton.css"
import "./stopButton.css"

export function StartStopButton(props) {
  function handleStartStop() {
    if (props.state === "onZero") {
      initializeTimers(props.mainTimer, props.setMainTimer, props.lapTimer, props.setLapTimer)
    }
    if (props.state === "paused") {
      props.setMainTimer({ ...props.mainTimer, startingTime: Date.now() })
      props.setLapTimer({ ...props.lapTimer, startingTime: Date.now() })
    }
    props.setState(updateState(props.state))
  }
  return (
    <button id="startStopButton" className={updateButtonsStyles(props.state, "start-stop")} onClick={handleStartStop}>
      {updateButtonsText(props.state, "start-stop")}
    </button>
  )
}
