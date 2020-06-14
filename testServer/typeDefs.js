import { gql } from 'apollo-server'

export const typeDefs = gql`
  scalar JSON

  type Query {
    dummy: Int!
  }

  type mutationResult {
    success: Boolean
  }

  type Mutation {
    onRunStart(data: onRunStartMutationInput): mutationResult
    onTestStart(data: onTestStartMutationInput): mutationResult
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

  input onTestStartMutationInput {
    runId: ID!
    path: String!
    rootDir: String!
    duration: Int!
  }

  type onTestStartSubscriptionResult {
    runId: ID!
    path: String!
    rootDir: String!
    duration: Int!
  }

  type Subscription {
    onRunStartSubscription: onRunStartSubscriptionResult
    onTestStartSubscription: onTestStartSubscriptionResult
  }
`
