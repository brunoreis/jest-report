describe('Example Tests', () => {
  describe('Successfull and nested', () => {
    it('passes', () => {
      expect(true).toBe(true)
    })
  })
  it('failing test', () => {
    expect(true).toBe(false)
  })

  it.skip('skipped test', () => {
    const dontRun = false
    expect(dontRun).toBe(true)
  })
})

it('root test, no describe', () => {
  expect(true).toBe(true)
})
