import styled from 'styled-components'

export const DescribeTitle = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  border-bottom: solid 1px ${({ open }) => (open ? '#ccc;' : 'transparent')};
  padding-bottom: 7px;
  display: flex;
  justify-content: space-between;
  color: ${({ finalStatus }) =>
    finalStatus === 'success'
      ? '#025500'
      : finalStatus === 'error'
      ? '#932'
      : '#ccc'};
`

export const Title = styled.div``
export const Totals = styled.div``
