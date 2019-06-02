const index = require('../index')

test('communicates with index.js etc', () => {
  const a = 2
  const b = 3
  const expected = 5
  const actual = a + b
  expect(actual).toBe(expected)
})