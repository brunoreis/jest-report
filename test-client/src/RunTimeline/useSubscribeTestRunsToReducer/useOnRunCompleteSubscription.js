import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const USE_ON_RUN_COMPLETE_SUBSCRIPTION = gql`
  subscription {
    onRunCompleteSubscription {
      runId
      success
    }
  }
`

export const useOnRunCompleteSubscription = (options) => {
  const subscriptionResponse = useSubscription(
    USE_ON_RUN_COMPLETE_SUBSCRIPTION,
    options,
  )
  if (subscriptionResponse.error) {
    console.error(subscriptionResponse.error)
  }
}
