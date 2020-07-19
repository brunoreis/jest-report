import gql from 'graphql-tag'

export const USE_ON_TEST_START_SUBSCRIPTION = gql`
  subscription {
    onTestStartSubscription {
      runId
      path
      duration
    }
  }
`
