import { onRunStart } from './onRunStart'
import { onTestStart } from './onTestStart'

export const reducer = (state, action) => {
  const runId = action.payload.runId
  switch (action.type) {
    case 'onRunStart':
      return onRunStart(state, action)
    case 'onTestStart':
      return onTestStart(state, action)
    // case 'onTestResult':
    // return onTestResult(state, action)
    default:
      throw new Error('Unhandled type: ' + action.type)
  }
}
