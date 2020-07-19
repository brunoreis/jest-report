import { getRun } from './helpers/getRun'
import { initRun } from './helpers/initRun'

export const onRunStart = (
  draftState,
  {
    payload: {
      runId,
      estimatedTime,
      testPathPattern,
      numTotalTestSuites,
      rootDir,
    },
  },
) =>
  getRun(draftState, runId)
    ? console.warn(`onRunStart called again for the same runId: ${runId}`)
    : draftState.runs.push(
        initRun({
          runId,
          estimatedTime,
          testPathPattern,
          numTotalTestSuites,
          rootDir,
        }),
      )
