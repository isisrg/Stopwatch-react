import { updateLapsStyles } from "../../utils/laps"
import "./lapTable.css"

export function LapTable(props) {
  const reversedLapEntries = [...props.lapEntries]
  reversedLapEntries.reverse()

  return (
    <div id="lapContainer">
      <table id="lapTable" className="lap-entry">
        <tbody>
          {reversedLapEntries.map((lap) => {
            return (
              <tr key={lap.index} className={updateLapsStyles(props.bestWorstLapInfo, lap.index, reversedLapEntries.length - 1)}>
                <td>{`Lap ${lap.index + 1}`}</td>
                <td>{lap.lapTime}</td>
              </tr>
            )
          })}
          {/* <tr id="emptyRow1">
            <td></td>
          </tr>
          <tr id="emptyRow2">
            <td></td>
          </tr>
          <tr id="emptyRow3">
            <td></td>
          </tr>
          <tr id="emptyRow4">
            <td></td>
          </tr>
          <tr id="emptyRow5">
            <td></td>
          </tr>
          <tr id="emptyRow6">
            <td></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}
