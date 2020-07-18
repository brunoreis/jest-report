import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'
import { apolloClient } from './apolloClient'
import { RunTimeline } from './RunTimeline'
import { hot } from 'react-hot-loader'

function App() {
  console.log('App')
  return (
    <ApolloProvider client={apolloClient}>
      <RunTimeline />
    </ApolloProvider>
  )
}

export default hot(module)(App)
