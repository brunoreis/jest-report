import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'
import { mockOnRunStart } from './mock/mockOnRunStart'

describe('useTestRunsReducer | getters', () => {
  describe('getTestRun', () => {
    it('return the run by runId', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'xxxrunId' })
      onRunStart(result, { runId: 'xxxrunId2' })
      onRunStart(result, { runId: 'xxxrunI3' })
      const run = result.current.getTestRun('xxxrunId2')
      expect(run.runId).toBe('xxxrunId2')
    })
  })
})

const onRunStart = (result, mockParams) =>
  act(() => {
    result.current.onRunStart(mockOnRunStart(mockParams))
  })
