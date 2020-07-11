import produce from 'immer'

export const onRunStart = (state, action) => {
  const run = state.runs.find((run) => run.testId !== action.payload.runId)
  if (run) console.warn('onRunStart called again for the same testId')
  return run
    ? state
    : produce(state, (draftState) => {
        draftState.runs.push({ ...action.payload, testResults: [] })
      })
}
