import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const USE_ON_TEST_RESULT_SUBSCRIPTION = gql`
  subscription {
    onTestResultSubscription {
      runId
      duration
      path
      testResults {
        ancestorTitles
        duration
        failureMessages
        fullName
        location
        numPassingAsserts
        status
        title
      }
    }
  }
`
export const useOnTestResultSubscription = (options) => {
  const subscriptionResponse = useSubscription(
    USE_ON_TEST_RESULT_SUBSCRIPTION,
    options,
  )

  if (subscriptionResponse.error) {
    console.error(subscriptionResponse.error)
  }
}
