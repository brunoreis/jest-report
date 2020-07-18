import styled from 'styled-components'

export const InnerTestResultWrapper = styled.div`
  color: ${(props) =>
    props.status == 'passed'
      ? '#070'
      : props.status == 'failed'
      ? 'red'
      : 'grey'};
  margin-bottom: 10px;
`
