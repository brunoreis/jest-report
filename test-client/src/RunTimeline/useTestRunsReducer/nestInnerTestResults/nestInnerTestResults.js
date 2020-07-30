export const nestInnerTestResults = (innerTestResults) => {
  const nested = []
  innerTestResults.reduce((nested, test) => {
    let level = 0
    if (test.ancestorTitles.length) {
      test.ancestorTitles.reduce((nested, title) => {
        level++
        const isLeaf = level === test.ancestorTitles.length
        let describe = nested.find(
          (item) => item.type === 'describe' && item.title === title,
        )

        if (!describe) {
          describe = {
            type: 'describe',
            title,
            innerTestResults: [],
          }
          nested.push(describe)
        }
        if (isLeaf) describe.innerTestResults.push({ type: 'test', ...test })
        return describe.innerTestResults
      }, nested)
    } else {
      nested.push({ type: 'test', ...test })
    }
    return nested
  }, nested)
  const nestedWithDescribeStatuses = calculateStatues(nested)
  return nested
}

const calculateStatues = (nested) => {
  return nested.map((item) => {
    if (item.type === 'describe') {
      item.innerTestResults = calculateStatues(item.innerTestResults)

      item.status = item.innerTestResults.reduce(
        (describeResults, itr) => {
          if (itr.type === 'test') {
            describeResults.numTests++
            if (itr.status === 'passed') {
              describeResults.numPassed++
            }
            if (itr.status === 'failed') {
              describeResults.numFailed++
            }
            if (itr.status === 'skipped') {
              describeResults.numSkipped++
            }
          }
          if (itr.type === 'describe') {
            describeResults.numSkipped += itr.status.numSkipped
            describeResults.numFailed += itr.status.numFailed
            describeResults.numPassed += itr.status.numPassed
            describeResults.numTests += itr.status.numTests
          }
          return describeResults
        },
        {
          numSkipped: 0,
          numFailed: 0,
          numPassed: 0,
          numTests: 0,
        },
      )
    }

    return item
  })
}
