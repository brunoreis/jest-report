import { getRunIndex } from './getRunIndex'

export const getTestResultIndex = (state, runId, path) => {
  const runIndex = getRunIndex(state, runId)
  const run = state.runs[runIndex]
  return run.testResults.findIndex((result) => result.path === path)
}
