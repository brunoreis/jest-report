export const getRun = (state, runId) => {
  return state.runs.find((run) => run.runId === runId)
}
