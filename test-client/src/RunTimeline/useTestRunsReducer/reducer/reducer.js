// import produce from 'immer'

import { onRunStart } from './onRunStart'
import { onTestStart } from './onTestStart'
import { onTestResult } from './onTestResult'
import { deleteRun } from './deleteRun'

export function reducer(state, action) {
  try {
    return action.type === 'onRunStart'
      ? onRunStart(state, action)
      : action.type === 'onTestStart'
      ? onTestStart(state, action)
      : action.type === 'onTestResult'
      ? onTestResult(state, action)
      : action.type === 'deleteRun'
      ? deleteRun(state, action)
      : state
  } catch (x) {
    console.error(x)
  }
}
