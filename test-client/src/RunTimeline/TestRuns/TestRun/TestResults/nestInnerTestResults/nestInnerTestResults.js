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
  return nested
}
