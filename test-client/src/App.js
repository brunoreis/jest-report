import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import './App.css'
import { apolloClient } from './apolloClient'
import { RunTimeline } from './RunTimeline'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RunTimeline />
    </ApolloProvider>
  )
}

export default App
