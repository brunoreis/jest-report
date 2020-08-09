import { getRunIndex } from './helpers/getRunIndex'
import { initRun } from './helpers/initRun'
import produce from 'immer'

export const onRunStart = (
  state,
  {
    payload: {
      runId,
      estimatedTime,
      testPathPattern,
      numTotalTestSuites,
      rootDir,
    },
  },
) => {
  const runIndex = getRunIndex(state, runId)

  if (runIndex !== -1) {
    console.warn(`onRunStart called again for the same runId: ${runId}`)
    return state
  } else {
    return produce(state, (draftState) => {
      draftState.runs.push(
        initRun({
          runId,
          estimatedTime,
          testPathPattern,
          numTotalTestSuites,
          rootDir,
        }),
      )
    })
  }
}
