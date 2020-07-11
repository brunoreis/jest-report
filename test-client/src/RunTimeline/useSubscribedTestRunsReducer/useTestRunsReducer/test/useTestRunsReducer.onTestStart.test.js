import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'
import { mockOnRunStart } from './mock/mockOnRunStart'
import { mockOnTestStart } from './mock/mockOnTestStart'

describe('useTestRunsReducer | onTestStart', () => {
  describe('onTestStart', () => {
    it('should register the test for the correct run', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId' })
      onRunStart(result, { runId: 'xxxrunId2' })
      onTestStart(result, { runId: 'xxxrunId2' })
      expect(result.current.state.runs[1].runId).toBe('xxxrunId2')
      expect(result.current.state.runs[1].testResults.length).toBe(1)
      expect(result.current.state.runs[1].testResults[0].runId).toBe(
        'xxxrunId2',
      )
    })

    it('should register the correct test path', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId' })
      onRunStart(result, { runId: 'xxxrunId2' })
      onTestStart(result, { runId: 'xxxrunId2', path: 'unique/path/to/test' })
      expect(result.current.state.runs[1].runId).toBe('xxxrunId2')
      expect(result.current.state.runs[1].testResults.length).toBe(1)
      expect(result.current.state.runs[1].testResults[0].path).toBe(
        'unique/path/to/test',
      )
    })

    it.skip('should not register the same test twice', () => {})
    it.skip('should put test in running state if it is not', () => {})
  })
})

const onRunStart = (result, mockParams) =>
  act(() => {
    result.current.onRunStart(mockOnRunStart(mockParams))
  })

const onTestStart = (result, mockParams) =>
  act(() => {
    result.current.onTestStart(mockOnTestStart(mockParams))
  })
