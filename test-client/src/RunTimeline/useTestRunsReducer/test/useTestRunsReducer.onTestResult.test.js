import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'
import { onRunStart } from './mock/onRunStart'
import { onTestStart } from './mock/onTestStart'
import { onTestResult } from './mock/onTestResult'

describe('useTestRunsReducer', () => {
  describe('onTestResult', () => {
    it('should register the result for the correct test, using the path as the index', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId' })
      onTestStart(result, { runId: 'xxxrunId' })
      onTestResult(result, {
        runId: 'xxxrunId',
        testResults: [
          { title: 'test 1', failureMessages: ['a', 'b'] },
          { title: 'test 2' },
        ],
      })
      const innerTestResults =
        result.current.state.runs[0].testResults[0].innerTestResults
      expect(innerTestResults.length).toBe(2)
      expect(innerTestResults[0].failureMessages.length).toBe(2)
      expect(innerTestResults.map(({ fullName }) => fullName)).toEqual([
        'Mock Tests test 1',
        'Mock Tests test 2',
      ])
    })

    it('should set running to false', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId' })
      onTestStart(result, { runId: 'xxxrunId' })
      onTestResult(result, {
        runId: 'xxxrunId',
        testResults: [{}],
      })
      expect(result.current.state.runs[0].testResults[0].running).toBe(false)
    })
  })
})
