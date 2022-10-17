export function updateState(state) {
  switch (state) {
    case "onZero":
    case "paused":
      state = "running"
      break
    case "running":
      state = "paused"
      break
    case "toReset":
      state = "onZero"
  }
  return state
}
