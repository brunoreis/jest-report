import styled from 'styled-components'
const colors = {
  passed: '#070',
  failed: '#D3302B',
  skipped: '#577',
}
export const InnerTestResultWrapper = styled.div`
  color: ${(props) =>
    props.status == 'passed'
      ? colors.passed
      : props.status == 'failed'
      ? colors.failed
      : colors.skipped};
  margin-bottom: 10px;
`
