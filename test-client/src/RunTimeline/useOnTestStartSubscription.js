import { useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const USE_ON_TEST_START_SUBSCRIPTION = gql`
  subscription {
    onTestStartSubscription {
      runId
      path
      rootDir
      duration
    }
  }
`

export const useOnTestStartSubscription = () => {
  const { data } = useSubscription(USE_ON_TEST_START_SUBSCRIPTION)
  return data ? data.onTestStartSubscription : null
}
