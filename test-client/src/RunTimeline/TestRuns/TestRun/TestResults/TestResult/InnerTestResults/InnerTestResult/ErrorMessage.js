import React from 'react'
import ansi_up from 'ansi_up'
import { ErrorMessageWrapper } from './ErrorMessageWrapper'

export const ErrorMessage = ({ message }) => {
  const ansiup = new ansi_up()
  return (
    <ErrorMessageWrapper
      dangerouslySetInnerHTML={{
        __html: nl2br(ansiup.ansi_to_html(message)),
      }}
    />
  )
}

function nl2br(str) {
  if (typeof str === 'undefined' || str === null) {
    return ''
  }
  var breakTag = '<br />'
  return (str + '').replace(
    /([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,
    '$1' + breakTag + '$2',
  )
}
