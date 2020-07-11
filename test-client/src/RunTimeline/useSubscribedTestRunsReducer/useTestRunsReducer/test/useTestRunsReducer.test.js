import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'
import { useOnRunStartSubscriptionMockData } from './mock/useOnRunStartSubscriptionMockData'

describe('useTestRunsReducer', () => {
  describe('initial state', () => {
    describe('runs', () => {
      it('is an empty array', () => {
        const {
          result: {
            current: { state },
          },
        } = renderHook(() => useTestRunsReducer())
        expect(state.runs.length).toBe(0)
      })
    })
  })

  describe('onRunStart', () => {
    it('should register one run with the runId', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      act(() =>
        result.current.dispatch({
          type: 'onRunStart',
          payload: {
            ...useOnRunStartSubscriptionMockData,
            runId: 'xxxrunId',
          },
        }),
      )
      expect(result.current.state.runs.length).toBe(1)
      expect(result.current.state.runs[0].runId).toBe('xxxrunId')
    })

    it('should not regiter two for the same runId', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      act(() =>
        result.current.dispatch({
          type: 'onRunStart',
          payload: {
            ...useOnRunStartSubscriptionMockData,
            runId: 'xxxrunId',
          },
        }),
      )
      const spy = jest.spyOn(global.console, 'warn').mockImplementation()
      act(() =>
        result.current.dispatch({
          type: 'onRunStart',
          payload: {
            ...useOnRunStartSubscriptionMockData,
            runId: 'xxxrunId',
          },
        }),
      )
      spy.mockRestore()
      expect(result.current.state.runs.length).toBe(1)
      expect(result.current.state.runs[0].runId).toBe('xxxrunId')
    })
  })
})
