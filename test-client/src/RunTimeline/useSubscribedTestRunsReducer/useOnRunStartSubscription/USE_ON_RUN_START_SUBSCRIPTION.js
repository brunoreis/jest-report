import gql from 'graphql-tag'

export const USE_ON_RUN_START_SUBSCRIPTION = gql`
  subscription {
    onRunStartSubscription {
      runId
      estimatedTime
      testPathPattern
      numTotalTestSuites
      rootDir
    }
  }
`
