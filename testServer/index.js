import { ApolloServer, gql } from 'apollo-server'
import { typeDefs } from './typeDefs'
import GraphQLJSON from 'graphql-type-json'

const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

const RUN_START = 'RUN_START'
const TEST_START = 'TEST_START'
const TEST_RESULT = 'TEST_RESULT'
const RUN_COMPLETE = 'RUN_COMPLETE'

const resolvers = {
  Query: {},
  Mutation: {
    onRunStart: (root, args, context) => {
      pubsub.publish(RUN_START, { onRunStartSubscription: args.data })
    },
    onTestStart: (root, args, context) => {
      pubsub.publish(TEST_START, { onTestStartSubscription: args.data })
    },
    onTestResult: (root, args, context) => {
      pubsub.publish(TEST_RESULT, { onTestResultSubscription: args.data })
    },
    onRunComplete: (root, args, context) => {
      pubsub.publish(RUN_COMPLETE, { onRunCompleteSubscription: args.data })
    },
  },
  Subscription: {
    onRunStartSubscription: {
      subscribe: () => pubsub.asyncIterator([RUN_START]),
    },
    onTestStartSubscription: {
      subscribe: () => pubsub.asyncIterator([TEST_START]),
    },
    onTestResultSubscription: {
      subscribe: () => pubsub.asyncIterator([TEST_RESULT]),
    },
    onRunCompleteSubscription: {
      subscribe: () => pubsub.asyncIterator([RUN_COMPLETE]),
    },
  },
  JSON: GraphQLJSON,
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
