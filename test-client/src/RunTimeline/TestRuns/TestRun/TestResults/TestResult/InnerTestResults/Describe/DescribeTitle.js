import styled from 'styled-components'
export const DescribeTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  color: ${({ finalStatus }) =>
    finalStatus === 'success'
      ? '#027700'
      : finalStatus === 'error'
      ? '#D3302B'
      : '#ccc'};
`
