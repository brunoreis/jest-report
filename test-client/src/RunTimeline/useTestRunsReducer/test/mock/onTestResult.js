import { mockOnTestResult } from './mockOnTestResult'
import { act } from '@testing-library/react-hooks'

export const onTestResult = (result, mockParams) =>
  act(() => {
    const mock = mockOnTestResult(mockParams)
    result.current.onTestResult(mock)
  })
