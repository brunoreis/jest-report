import produce from 'immer'

import { onRunStart } from './onRunStart'
import { onTestStart } from './onTestStart'
import { onTestResult } from './onTestResult'

export const reducer = produce((draftState, action) => {
  switch (action.type) {
    case 'onRunStart':
      onRunStart(draftState, action)
      break
    case 'onTestStart':
      onTestStart(draftState, action)
      break
    case 'onTestResult':
      onTestResult(draftState, action)
      break
  }
}, {})
