export function updateButtonsStyles(state, button) {
  if (button === "start-stop") return state === "running" ? "stop-button" : "start-button"
  else if (button === "lap-reset") return state === "onZero" ? "unabled-lap-button" : "lap-reset-button"
}

export function updateButtonsText(state, button) {
  if (button === "start-stop") return state === "running" ? "Stop" : "Start"
  else if (button === "lap-reset") return state === "paused" ? "Reset" : "Lap"
}
