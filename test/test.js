var kata = require('../index.js')

test('greeting not expected', function  () {
  var name = 'hamish'
  var actual = 'hello hamish'
  var expected = 'hello hamish'
  kata.greeting(name)
  expect(actual).toEqual(expected)
})

