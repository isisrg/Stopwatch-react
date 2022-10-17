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
        lapNumber={props.lapNumber}
        setLapNumber={props.setLapNumber}
        lapEntries={props.lapEntries}
        setLapEntries={props.setLapEntries}
        bestWorstLapInfo={props.bestWorstLapInfo}
        setBestWorstLapInfo={props.setBestWorstLapInfo}
      />
      <StartStopButton
        state={props.state}
        setState={props.setState}
        mainTimer={props.mainTimer}
        setMainTimer={props.setMainTimer}
        lapTimer={props.lapTimer}
        setLapTimer={props.setLapTimer}
        lapNumber={props.lapNumber}
        setLapNumber={props.setLapNumber}
        lapEntries={props.setLapEntries}
        setLapEntries={props.setLapEntries}
      />
    </div>
  )
}
