import { onRunStart } from './onRunStart'
import { onTestStart } from './onTestStart'

export const reducer = (state, action) => {
  const runId = action.payload.runId
  switch (action.type) {
    // case 'onTestResult':
    //   console.log('onTestResult', action)
    //   return [...state]
    case 'onRunStart':
      return onRunStart(state, action)
    case 'onTestStart':
      return onTestStart(state, action)
    default:
      throw new Error('Unhandled type: ' + action.type)
  }
}
