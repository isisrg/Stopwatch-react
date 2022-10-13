import { getUserName } from "../utils/getUserName"

export function MySecondComponent() {
  const name = getUserName()

  return <div>Hola {name}</div>
}

// function StartStopButton() {
//     const className = start === true ? 'stop-class' : 'start-class'

// return <button className={className} ...

// }

// function oldStyleFunction(name) {
//   return 0
// }

// const newStyleFunction = (name) => 0
