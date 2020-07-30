import { nestInnerTestResults } from './nestInnerTestResults'
import { mockResult } from './mockResult'

const innerTestResults = [
  mockResult({
    ancestorTitles: ['First Level', 'Second Level'],
    title: 'test 1',
  }),
  mockResult({
    ancestorTitles: ['First Level'],
    title: 'test 2',
  }),
  mockResult({
    ancestorTitles: ['First Level'],
    title: 'test 3',
  }),
  mockResult({
    ancestorTitles: [],
    title: 'root test, no describe',
  }),
]

describe('nestInnerTestResults', () => {
  it('should nest describes', () => {
    const nestedResults = nestInnerTestResults(innerTestResults)
    expect(nestedResults.length).toBe(2) // 'Example Test' describe and the orphan test
    expect(nestedResults[0].type).toBe('describe')
    expect(nestedResults[0].title).toBe('First Level')
    expect(nestedResults[1].title).toBe('root test, no describe')
    expect(nestedResults[0].innerTestResults.length).toBe(3)
    expect(nestedResults[0].innerTestResults[0].type).toBe('describe')
    expect(nestedResults[0].innerTestResults[0].title).toBe('Second Level')
    expect(nestedResults[0].innerTestResults[0].innerTestResults[0].type).toBe(
      'test',
    )
    expect(nestedResults[0].innerTestResults[0].innerTestResults[0].title).toBe(
      'test 1',
    )
    expect(nestedResults[0].innerTestResults[1].type).toBe('test')
    expect(nestedResults[0].innerTestResults[1].title).toBe('test 2')
    expect(nestedResults[0].innerTestResults[2].type).toBe('test')
    expect(nestedResults[0].innerTestResults[2].title).toBe('test 3')
  })

  it('a describe should have a status with correct: numPassed, numFailed, numSkipped, numTests', () => {
    const nestedResults = nestInnerTestResults(innerTestResults)
    expect(nestedResults[0].status).toEqual({
      numPassed: 3,
      numFailed: 0,
      numSkipped: 0,
      numTests: 3,
    })
    expect(nestedResults[0].innerTestResults[0].status).toEqual({
      numSkipped: 0,
      numFailed: 0,
      numPassed: 1,
      numTests: 1,
    })
  })
})
