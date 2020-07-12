export const getRun = (state, runId) =>
  state.runs.find((run) => run.runId === runId)
