import "./timerAndButtons.css"

import { Timer } from "./Timer/Timer"
import { Buttons } from "./Buttons/Buttons"

export function TimerAndButtons(props) {
  return (
    <div id="timerAndButtonsContainer">
      <Timer mainTimer={props.mainTimer} setMainTimer={props.setMainTimer} />
      <Buttons
        state={props.state}
        setState={props.setState}
        mainTimer={props.mainTimer}
        setMainTimer={props.setMainTimer}
        lapTimer={props.lapTimer}
        setLapTimer={props.setLapTimer}
        lapNumber={props.lapNumber}
        setLapNumber={props.setLapNumber}
        lapEntries={props.lapEntries}
        setLapEntries={props.setLapEntries}
        bestWorstLapInfo={props.bestWorstLapInfo}
        setBestWorstLapInfo={props.setBestWorstLapInfo}
      />
    </div>
  )
}
