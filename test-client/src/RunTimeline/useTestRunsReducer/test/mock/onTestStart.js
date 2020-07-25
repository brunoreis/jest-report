import { mockOnTestStart } from './mockOnTestStart'
import { act } from '@testing-library/react-hooks'

export const onTestStart = (result, mockParams) =>
  act(() => {
    result.current.onTestStart(mockOnTestStart(mockParams))
  })
