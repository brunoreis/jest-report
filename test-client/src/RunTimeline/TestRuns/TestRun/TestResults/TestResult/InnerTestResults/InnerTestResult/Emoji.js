import React from 'react'
import styled from 'styled-components'

export const EmojiWrapper = styled.div`
  margin-right: 5px;
  display: inline-block;
`

export const Emoji = ({ status }) => (
  <EmojiWrapper>
    {status === 'passed' && '✅'}
    {status === 'failed' && '❌'}
    {status === 'pending' && '🗍'}
  </EmojiWrapper>
)
