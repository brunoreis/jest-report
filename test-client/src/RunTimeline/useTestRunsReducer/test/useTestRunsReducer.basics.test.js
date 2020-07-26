import { renderHook, act } from '@testing-library/react-hooks'
import { useTestRunsReducer } from '../useTestRunsReducer'
import { onRunStart } from './mock/onRunStart'
import { onTestStart } from './mock/onTestStart'
import { onTestResult } from './mock/onTestResult'

describe('useTestRunsReducer', () => {
  describe('basics - hook return payload', () => {
    describe('runs', () => {
      it('starts as an empty array', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        expect(result.current.state.runs.length).toBe(0)
      })
    })

    describe('getRunIds', () => {
      const { result } = renderHook(() => useTestRunsReducer())
      onRunStart(result, { runId: 'r1' })
      onRunStart(result, { runId: 'r2' })
      expect(result.current.getRunIds()).toEqual(['r1', 'r2'])
    })

    describe('getTestRun', () => {
      it('return by runId', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        onRunStart(result, { runId: 'r1' })
        onRunStart(result, { runId: 'r2' })
        onRunStart(result, { runId: 'r3' })
        const run = result.current.getTestRun('r2')
        expect(run.runId).toBe('r2')
      })
    })

    describe('getTestResultPaths', () => {
      it('return by runId', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        const runId = 'r1'
        const p1 = 'path/1'
        const p2 = 'path/2'
        onRunStart(result, { runId })
        onTestStart(result, { runId, path: p1 })
        onTestStart(result, { runId, path: p2 })
        const paths = result.current.getTestResultPaths('r1')
        expect(paths).toEqual([p1, 'path/2'])
      })
    })

    describe('getTestResult', () => {
      it('return by runId and path', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        const runId = 'r1'
        const p1 = 'path/1'
        const p2 = 'path/2'
        onRunStart(result, { runId })
        onTestStart(result, { runId, path: p1 })
        onTestStart(result, { runId, path: p2 })
        const testResult = result.current.getTestResult(runId, p2)
        expect(testResult.path).toBe(p2)
      })
    })

    describe('getNestedInnerTestResult', () => {
      it('return innerTestReult nested with describes', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        const runId = 'r1'
        const p1 = 'path/1'
        const p2 = 'path/2'
        onRunStart(result, { runId })
        onTestStart(result, { runId, path: p1 })
        onTestResult(result, {
          runId,
          path: p1,
          testResults: [
            {
              ancestorTitles: ['Level 1'],
              title: 'test 1',
            },
          ],
        })

        const nestedResults = result.current.getNestedInnerTestResult(runId, p1)
        expect(nestedResults[0].type).toBe('describe')
      })
    })
    describe('deleteRun(runId)', () => {
      it('deletes the specified test run', () => {
        const { result } = renderHook(() => useTestRunsReducer())
        const runId = 'r1'
        expect(result.current.state.runs.length).toBe(0)
        onRunStart(result, { runId })
        expect(result.current.state.runs.length).toBe(1)
        act(() => result.current.deleteRun(runId))
        expect(result.current.state.runs.length).toBe(0)
      })
    })
  })
})
