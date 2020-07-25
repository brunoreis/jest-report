import { nestInnerTestResults } from './nestInnerTestResults'
import { expectedResult } from './expectedResult'

const innerTestResults = [
  {
    ancestorTitles: ['Example Tests', 'Successfull and nested'],
    duration: 2,
    failureMessage: null,
    fullName: 'Example Tests Successfull and nested passes',
    location: null,
    numPassingAsserts: 0,
    status: 'passed',
    title: 'passes',
  },
  {
    ancestorTitles: ['Example Tests'],
    duration: 2,
    failureMessage: null,
    fullName: 'Example Tests failing test',
    location: null,
    numPassingAsserts: 0,
    status: 'failed',
    title: 'failing test',
  },
  {
    ancestorTitles: ['Example Tests'],
    duration: 0,
    failureMessage: null,
    fullName: 'Example Tests skipped test',
    location: null,
    numPassingAsserts: 0,
    status: 'pending',
    title: 'skipped test',
  },
  {
    ancestorTitles: [],
    duration: 1,
    failureMessage: null,
    fullName: 'root test, no describe',
    location: null,
    numPassingAsserts: 0,
    status: 'passed',
    title: 'root test, no describe',
  },
]

describe('nestInnerTestResults', () => {
  it('should nest describes', () => {
    const nestedResults = nestInnerTestResults(innerTestResults)
    expect(nestedResults).toEqual(expectedResult)
  })
})
