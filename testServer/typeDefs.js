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
    onTestResult(data: onTestResultMutationInput): mutationResult
    onRunComplete(data: onRunCompleteMutationInput): mutationResult
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

  type TestResult {
    ancestorTitles: [String!]
    duration: Int!
    failureMessage: String
    fullName: String!
    location: String
    numPassingAsserts: Int!
    status: String!
    title: String!
  }

  input TestResultInput {
    ancestorTitles: [String!]
    duration: Int!
    failureMessage: String
    fullName: String!
    location: String
    numPassingAsserts: Int!
    status: String!
    title: String!
  }

  input onTestResultMutationInput {
    runId: ID!
    duration: Int!
    testResults: [TestResultInput!]
  }

  type onTestResultSubscriptionResult {
    runId: ID!
    duration: Int!
    testResults: [TestResult!]
  }

  input onRunCompleteMutationInput {
    runId: ID!
    success: Boolean!
  }

  type onRunCompleteSubscriptionResult {
    runId: ID!
    success: Boolean!
  }

  type Subscription {
    onRunStartSubscription: onRunStartSubscriptionResult
    onTestStartSubscription: onTestStartSubscriptionResult
    onTestResultSubscription: onTestResultSubscriptionResult
    onRunCompleteSubscription: onRunCompleteSubscriptionResult
  }
`
