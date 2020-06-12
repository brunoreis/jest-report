import { ApolloServer, gql } from 'apollo-server'
import { typeDefs } from './typeDefs'
import GraphQLJSON from 'graphql-type-json'

const { PubSub } = require('apollo-server')
const pubsub = new PubSub()

const TEST_RUN_STARTED = 'TEST_RUN_STARTED'

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
]

const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    testRunStarted: (root, args, context) => {
      pubsub.publish(TEST_RUN_STARTED, { onTestRunStarted: args })
    },
  },
  Subscription: {
    onTestRunStarted: {
      subscribe: () => pubsub.asyncIterator([TEST_RUN_STARTED]),
    },
  },
  JSON: GraphQLJSON,
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
