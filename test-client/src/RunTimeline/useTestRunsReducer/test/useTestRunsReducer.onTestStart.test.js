import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'
import { mockOnRunStart } from './mock/mockOnRunStart'
import { mockOnTestStart } from './mock/mockOnTestStart'

describe('useTestRunsReducer', () => {
  describe('onTestStart', () => {
    it('should ignore a test with an unexistent runId', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onTestStart(result, { runId: 'r1' })
    })

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

    it('should have keys: runId, path, rootDir, duration, running, innerTestResults', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId' })
      onRunStart(result, { runId: 'xxxrunId2' })
      onTestStart(result, { runId: 'xxxrunId2' })
      expect(result.current.state.runs[1].runId).toBe('xxxrunId2')
      expect(Object.keys(result.current.state.runs[1].testResults[0])).toEqual([
        'runId',
        'path',
        'rootDir',
        'duration',
        'running',
        'innerTestResults',
      ])
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

    it('should not register the same test twice', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId2' })
      onTestStart(result, { runId: 'xxxrunId2', path: 'unique/path/to/test' })
      onTestStart(result, { runId: 'xxxrunId2', path: 'unique/path/to/test' })
      expect(result.current.state.runs[0].testResults.length).toBe(1)
      expect(result.current.state.runs[0].testResults[0].path).toBe(
        'unique/path/to/test',
      )
    })
    it('should put test in running state if it is not', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId2' })
      onTestStart(result, { runId: 'xxxrunId2', path: 'unique/path/to/test' })
      expect(result.current.state.runs[0].testResults[0].running).toBe(true)
    })
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
