import { ApolloServer, gql } from 'apollo-server'
import { typeDefs } from './typeDefs'
import GraphQLJSON from 'graphql-type-json'

const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

const TEST_RUN_STARTED = 'TEST_RUN_STARTED'

const resolvers = {
  Query: {},
  Mutation: {
    onRunStart: (root, args, context) => {
      console.log('testRunStarted', args)
      pubsub.publish(TEST_RUN_STARTED, { onRunStartSubscription: args.data })
    },
  },
  Subscription: {
    onRunStartSubscription: {
      subscribe: () => pubsub.asyncIterator([TEST_RUN_STARTED]),
    },
  },
  JSON: GraphQLJSON,
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
