import { gql } from 'apollo-server'

export const typeDefs = gql`
  scalar JSON

  type Query {
    dummy: Int!
  }

  type onRunStartMutationResult {
    success: Boolean
  }

  type Mutation {
    onRunStart(data: onRunStartMutationInput): onRunStartMutationResult
  }

  input onRunStartMutationInput {
    runId: ID!
    estimatedTime: Int!
    numTotalTestSuites: Int!
    testPathPattern: String
  }

  type onRunStartSubscriptionResult {
    runId: ID!
    estimatedTime: Int!
    numTotalTestSuites: Int!
    testPathPattern: String
  }

  type Subscription {
    onRunStartSubscription: onRunStartSubscriptionResult
  }
`
