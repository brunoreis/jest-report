import React from 'react'
import { TestFile } from './TestFile'
import { Path } from './Path'

export const TestResultTitle = ({ path, rootDir }) => {
  const nameWithoutPath = path.replace(rootDir, '')
  const parts = nameWithoutPath.split('/')
  const fileName = parts.pop()
  return (
    <div>
      <Path>{parts.join('/')}</Path>
      <TestFile>{fileName}</TestFile>
    </div>
  )
}
