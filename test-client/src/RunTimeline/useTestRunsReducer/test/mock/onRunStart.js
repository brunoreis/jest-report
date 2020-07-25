import { mockOnRunStart } from './mockOnRunStart'
import { act } from '@testing-library/react-hooks'

export const onRunStart = (result, mockParams) =>
  act(() => {
    result.current.onRunStart(mockOnRunStart(mockParams))
  })
