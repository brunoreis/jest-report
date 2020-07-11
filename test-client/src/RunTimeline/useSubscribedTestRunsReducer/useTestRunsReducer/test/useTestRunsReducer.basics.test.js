import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'

describe('useTestRunsReducer | basics', () => {
  describe('runs', () => {
    it('starts as an empty array', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      expect(result.current.state.runs.length).toBe(0)
    })
  })
})
