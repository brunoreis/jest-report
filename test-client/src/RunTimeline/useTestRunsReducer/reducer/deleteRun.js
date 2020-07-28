import produce from 'immer'

import { getRunIndex } from './helpers/getRunIndex'
import { getTestResultIndex } from './helpers/getTestResultIndex'
import { initTestResult } from './helpers/initTestResult'

export const deleteRun = (state, { payload: { runId } }) => {
  const testRunIndex = getRunIndex(state, runId)

  return produce(state, (draftState) => {
    draftState.runs.splice(testRunIndex, 1)
  })
}
