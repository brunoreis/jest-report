import styled from 'styled-components'

export const NumTestsWrapper = styled.div`
  margin-left: 5px;
  background-color: ${({ failed, passed, skipped }) =>
    failed ? '#CAA' : passed ? '#ACA' : '#AAA'};
  font-weight: bold;
  font-size: 14px;
  display: inline-block;
  padding-right: 3px;
  padding-left: 3px;
  border-radius: 4px;
  min-width: 10px;
  text-align: center;
  color: #fff;
`
