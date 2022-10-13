import "./buttons.css"
import { LapResetButton } from "./LapResetButton/LapResetButton"
import { StartStopButton } from "./StartStopButton/StartStopButton"

export function Buttons(props) {
  return (
    <div id="buttonsContainer">
      <LapResetButton
        state={props.state}
        setState={props.setState}
        mainTimer={props.mainTimer}
        setMainTimer={props.setMainTimer}
        lapTimer={props.lapTimer}
        setLapTimer={props.setLapTimer}
        lapEntries={props.lapEntries}
        lapNumber={props.lapNumber}
        setLapNumber={props.setLapNumber}
      />
      <StartStopButton
        state={props.state}
        setState={props.setState}
        mainTimer={props.mainTimer}
        setMainTimer={props.setMainTimer}
        lapTimer={props.lapTimer}
        setLapTimer={props.setLapTimer}
      />
    </div>
  )
}
