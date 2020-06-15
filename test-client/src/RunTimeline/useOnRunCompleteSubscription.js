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

export const useOnRunCompleteSubscription = () => {
  const { data } = useSubscription(USE_ON_RUN_COMPLETE_SUBSCRIPTION)
  return data ? data.onRunCompleteSubscription : null
}
