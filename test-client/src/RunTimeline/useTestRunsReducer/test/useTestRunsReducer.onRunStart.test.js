import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'
import { mockOnRunStart } from './mock/mockOnRunStart'

describe('useTestRunsReducer', () => {
  describe('onRunStart', () => {
    describe('onRunStart', () => {
      it('should register one run for every runId', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        onRunStart(result, { runId: 'xxxrunId' })
        onRunStart(result, { runId: 'xxxrunId2' })
        expect(result.current.state.runs.length).toBe(2)
        expect(result.current.state.runs[0].runId).toBe('xxxrunId')
      })

      it('run should have: runId, path, rootDir, duration, running and testResults', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        onRunStart(result, { runId: 'xxxrunId' })
        onRunStart(result, { runId: 'xxxrunId2' })
        expect(result.current.state.runs.length).toBe(2)
        expect(Object.keys(result.current.state.runs[0])).toEqual([
          'runId',
          'rootDir',
          'estimatedTime',
          'testPathPattern',
          'numTotalTestSuites',
          'testResults',
        ])
      })

      it('should not regiter two for the same runId', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        act(() =>
          result.current.onRunStart(mockOnRunStart({ runId: 'xxxrunId' })),
        )
        const spy = jest.spyOn(global.console, 'warn').mockImplementation()
        onRunStart(result, { runId: 'xxxrunId' })
        spy.mockRestore()
        expect(result.current.state.runs.length).toBe(1)
        expect(result.current.state.runs[0].runId).toBe('xxxrunId')
      })
    })
  })
})

const onRunStart = (result, mockParams) =>
  act(() => {
    result.current.onRunStart(mockOnRunStart(mockParams))
  })
