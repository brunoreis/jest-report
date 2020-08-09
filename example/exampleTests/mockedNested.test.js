describe('Describe Block 1', () => {
  describe('Describe Block 2', () => {
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

    it('passing in the same level as the describe blocks', () => {
      expect(1 + 1).toBe(2)
    })
  })
})
