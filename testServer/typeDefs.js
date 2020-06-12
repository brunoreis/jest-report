import { gql } from 'apollo-server'

export const typeDefs = gql`
  scalar JSON

  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  type TestRunStartedMutationResult {
    success: Boolean
  }

  type Mutation {
    testRunStarted(testNum: Int): TestRunStartedMutationResult
  }

  type TestRunStartedData {
    testNum: Int
  }

  type Subscription {
    onTestRunStarted: TestRunStartedData
  }
`
