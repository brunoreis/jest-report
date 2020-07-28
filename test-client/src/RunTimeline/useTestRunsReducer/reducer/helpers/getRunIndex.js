export const getRunIndex = (state, runId) => {
  return state.runs.findIndex((run) => run.runId === runId)
}
