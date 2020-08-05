describe('Mocked Nested', () => {
  describe('two passing and one failing', () => {
    describe('sum', () => {
      it('one plus one equals two', () => {
        expect(1 + 1).toBe(2)
      })
    })

    describe('minus', () => {
      it('one minus one equals 0', () => {
        expect(1 - 1).toBe(0)
      })

      it('three minus one equals 0', () => {
        expect(3 - 1).toBe(0)
      })
    })

    describe('multiplication', () => {
      it.skip('two times two', () => {})

      it('three times two', () => {
        expect(3 * 2).toBe(6)
      })
    })
  })
})
