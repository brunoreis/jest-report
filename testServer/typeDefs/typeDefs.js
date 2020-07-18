import { gql } from 'apollo-server'
import { onRunStartFields } from './onRunStartFields'
import { onTestStartFields } from './onTestStartFields'
import { onTestResultFields, TestResultFields } from './onTestResultFields'
import { onRunCompleteFields } from './onRunCompleteFields'

export const typeDefs = gql`
  scalar JSON

  type Query {
    dummy: Int!
  }

  type Mutation {
    onRunStart(data: onRunStartMutationInput): mutationResult
    onTestStart(data: onTestStartMutationInput): mutationResult
    onTestResult(data: onTestResultMutationInput): mutationResult
    onRunComplete(data: onRunCompleteMutationInput): mutationResult
  }

  type Subscription {
    onRunStartSubscription: onRunStartSubscriptionResult
    onTestStartSubscription: onTestStartSubscriptionResult
    onTestResultSubscription: onTestResultSubscriptionResult
    onRunCompleteSubscription: onRunCompleteSubscriptionResult
  }

  type mutationResult {
    success: Boolean
  }

  input onRunStartMutationInput {
    ${onRunStartFields}
  }

  type onRunStartSubscriptionResult {
    ${onRunStartFields}
  }

  input onTestStartMutationInput {
    ${onTestStartFields}
  }

  type onTestStartSubscriptionResult {
    ${onTestStartFields}
  }

  type TestResult {
    ${TestResultFields}
  }

  input TestResultInput {
    ${TestResultFields}
  }

  input onTestResultMutationInput {
    ${onTestResultFields({ input: true })}
  }

  type onTestResultSubscriptionResult {
    ${onTestResultFields({ input: false })}
  }

  input onRunCompleteMutationInput {
    ${onRunCompleteFields}
  }

  type onRunCompleteSubscriptionResult {
    ${onRunCompleteFields}
  }

`
