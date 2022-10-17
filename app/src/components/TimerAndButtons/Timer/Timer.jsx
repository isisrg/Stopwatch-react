import "./timer.css"

export function Timer(props) {
  return (
    <span className="timer">
      {/* {formatTime(props.timeInMilliseconds)} */}
      {props.mainTimer.displayTime}
    </span>
  )
}
