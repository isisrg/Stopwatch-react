import "./timer.css"

export function Timer(props) {
  return (
    <span className="timer">
      {props.mainTimer.minutes}:{props.mainTimer.seconds}.{props.mainTimer.hundredths}
    </span>
  )
}
