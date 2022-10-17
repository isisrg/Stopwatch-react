export function updateLapEntries(lapTimer, setLapEntries) {
  setLapEntries((previousLapEntries) => {
    const lapTime = lapTimer.minutes + ":" + lapTimer.seconds + "." + lapTimer.hundredths

    let oldLapEntry = previousLapEntries[previousLapEntries.length - 1]
    const newLapEntry = {
      index: oldLapEntry.index,
      lapTime,
    }

    const lapEntriesToKeep = [...previousLapEntries]
    lapEntriesToKeep.pop()
    const newLapEntries = [...lapEntriesToKeep, newLapEntry]
    return newLapEntries
  })
}

export function registerNewLap(lapNumber, setLapNumber, setLapEntries) {
  setLapEntries((previousLapEntries) => {
    const newLapEntry = { index: lapNumber, lapTime: "00:00.00" }
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

// export function updateBestWorstLapValues() {
//   switch (lapNumber) {
//     case 1:
//       bestWorstLapInfo.bestLapPosition = bestWorstLapInfo.worstLapPosition = 1
//       bestWorstLapInfo.bestLapMilliseconds = bestWorstLapInfo.worstLapMilliseconds = lapTimer.milliseconds
//       break
//     case 2:
//       if (lapTimer.milliseconds < bestWorstLapInfo.bestLapMilliseconds) {
//         bestWorstLapInfo.bestLapPosition = lapNumber
//         bestWorstLapInfo.bestLapMilliseconds = lapTimer.milliseconds
//       } else if (lapTimer.milliseconds > bestWorstLapInfo.worstLapMilliseconds) {
//         bestWorstLapInfo.worstLapPosition = lapNumber
//         bestWorstLapInfo.worstLapMilliseconds = lapTimer.milliseconds
//       }
//     default:
//       if (lapTimer.milliseconds < bestWorstLapInfo.bestLapMilliseconds) {
//         bestWorstLapInfo.bestLapPosition = lapNumber
//         bestWorstLapInfo.bestLapMilliseconds = lapTimer.milliseconds
//       } else if (lapTimer.milliseconds > bestWorstLapInfo.worstLapMilliseconds) {
//         bestWorstLapInfo.worstLapPosition = lapNumber
//         bestWorstLapInfo.worstLapMilliseconds = lapTimer.milliseconds
//       }
//   }
// }

// export function updateLapsStyles(toUpdate) {
//   switch (toUpdate) {
//     case "best":
//       document.getElementById(`lap-${bestWorstLapInfo.bestLapPosition}`).classList.remove("best-lap")
//       document.getElementById(`lap-${lapNumber}`).classList.add("best-lap")
//       break
//     case "worst":
//       document.getElementById(`lap-${bestWorstLapInfo.worstLapPosition}`).classList.remove("worst-lap")
//       document.getElementById(`lap-${lapNumber}`).classList.add("worst-lap")
//       break
//     case "second":
//       document.getElementById(`lap-${bestWorstLapInfo.bestLapPosition}`).classList.add("best-lap")
//       document.getElementById(`lap-${bestWorstLapInfo.worstLapPosition}`).classList.add("worst-lap")
//   }
// }

// export function updateBestWorstLap() {
//   switch (lapNumber) {
//     case 1:
//       updateBestWorstLapValues()
//       break
//     case 2:
//       updateBestWorstLapValues()
//       updateLapsStyles("second")

//     default:
//       if (lapTimer.milliseconds < bestWorstLapInfo.bestLapMilliseconds) {
//         updateLapsStyles("best")
//         updateBestWorstLapValues()
//       } else if (lapTimer.milliseconds > bestWorstLapInfo.worstLapMilliseconds) {
//         updateLapsStyles("worst")
//         updateBestWorstLapValues()
//       }
//   }
// }
