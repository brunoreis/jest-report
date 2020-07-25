import styled from 'styled-components'

export const InnerTestResultsWrapper = styled.div`
  margin-top: 10px;
  margin-left: ${(props) => 20 + props.level * 30}px;
`
