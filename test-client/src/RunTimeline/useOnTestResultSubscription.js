import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const USE_ON_TEST_RESULT_SUBSCRIPTION = gql`
  subscription {
    onTestResultSubscription {
      runId
      duration
      testResults {
        ancestorTitles
        duration
        failureMessage
        fullName
        location
        numPassingAsserts
        status
        title
      }
    }
  }
`

export const useOnTestResultSubscription = () => {
  const { data } = useSubscription(USE_ON_TEST_RESULT_SUBSCRIPTION)
  return data ? data.onTestResultSubscription : null
}
