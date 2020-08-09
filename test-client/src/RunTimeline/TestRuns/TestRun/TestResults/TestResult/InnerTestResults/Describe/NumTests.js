import React from 'react'
import { NumTestsWrapper } from './NumTests.styles'
import PropTypes from 'prop-types'

export const NumTests = ({ children: numTests, failed, total, pending }) => {
  return (
    <NumTestsWrapper
      empty={numTests === 0}
      failed={failed}
      pending={pending}
      total={total}
    >
      {numTests === 0 ? null : numTests}
    </NumTestsWrapper>
  )
}

NumTests.propTypes = {
  children: PropTypes.string,
}
