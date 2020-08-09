import React from 'react'
import copy from 'copy-to-clipboard'
import icon from './icons8-copy-to-clipboard-50.png'
import { CopyToClipboardWrapper } from './CopyToClipboardWrapper'

export const CopyToClipboard = ({ text }) => {
  return (
    <CopyToClipboardWrapper
      onClick={(e) => {
        copy(text)
        e.stopPropagation()
      }}
    >
      <img src={icon} alt="copy to clipboard" width={18} />
    </CopyToClipboardWrapper>
  )
}
