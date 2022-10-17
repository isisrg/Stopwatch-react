import { updateState } from "./state"

export function initialize(props) {
  //   TODO: createEmptyLapsEntries()
  props.setState(updateState("toReset"))
  props.setMainTimer({ minutes: "00", seconds: "00", hundredths: "00", milliseconds: 0, timerMilliseconds: 0, startingTime: 0 })
  props.setLapTimer({ minutes: "00", seconds: "00", hundredths: "00", milliseconds: 0, timerMilliseconds: 0, startingTime: 0 })
  props.setLapNumber(0)
  props.setLapEntries([])
}
