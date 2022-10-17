export function updateLapEntries(lapTimer, setLapEntries) {
  setLapEntries((previousLapEntries) => {
    let oldLapEntry = previousLapEntries[previousLapEntries.length - 1]
    const newLapEntry = {
      index: oldLapEntry.index,
      lapTime: lapTimer.displayTime,
      milliseconds: lapTimer.milliseconds,
    }

    const lapEntriesToKeep = [...previousLapEntries]
    lapEntriesToKeep.pop()
    const newLapEntries = [...lapEntriesToKeep, newLapEntry]
    return newLapEntries
  })
}

export function registerNewLap(lapNumber, setLapNumber, setLapEntries) {
  setLapEntries((previousLapEntries) => {
    const newLapEntry = { index: lapNumber, lapTime: "00:00.00", milliseconds: 0 }
    const newLapEntries = [...previousLapEntries, newLapEntry]
    return newLapEntries
  })
  setLapNumber((previousLapNumber) => previousLapNumber + 1)
}

// export function createEmptyLapsEntries() {
//   lapNumber = 6
//   while (lapNumber > 0) {
//     let lapTableRow = $lapTable.insertRow(0)
//     lapTableRow.id = `emptyRow${lapNumber}`
//     lapTableRow.insertCell(0)
//     --lapNumber
//   }
// }

// export function deleteEmptyLapEntry() {
//   document.getElementById(`emptyRow${lapNumber}`).remove()
// }

export function updateBestWorstLapValues(previousEntry, bestWorstLapInfo, setBestWorstLapInfo) {
  switch (previousEntry.index) {
    case 0:
      setBestWorstLapInfo({
        bestLapPosition: previousEntry.index,
        bestLapMilliseconds: previousEntry.milliseconds,
        worstLapPosition: previousEntry.index,
        worstLapMilliseconds: previousEntry.milliseconds,
      })
      break
    default:
      if (previousEntry.milliseconds < bestWorstLapInfo.bestLapMilliseconds) {
        setBestWorstLapInfo({ ...bestWorstLapInfo, bestLapPosition: previousEntry.index, bestLapMilliseconds: previousEntry.milliseconds })
      } else if (previousEntry.milliseconds > bestWorstLapInfo.worstLapMilliseconds) {
        setBestWorstLapInfo({ ...bestWorstLapInfo, worstLapPosition: previousEntry.index, worstLapMilliseconds: previousEntry.milliseconds })
      }
  }
}
export function updateLapsStyles(bestWorstLapInfo, lapIndex, lapNumber) {
  if (lapNumber > 1 && lapIndex === bestWorstLapInfo.bestLapPosition) return "best-lap"
  if (lapNumber > 1 && lapIndex === bestWorstLapInfo.worstLapPosition) return "worst-lap"
  else return "lap-entry"
}
