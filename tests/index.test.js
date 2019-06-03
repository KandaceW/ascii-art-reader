const index = require('../index')

test('initial test', function() {
    expect(3).toEqual(3);
})

test('welcome message', function() {
    actual = index.welcomeMessage()
    expected = console.log("What's good?")
    expect(actual).toBe(expected)
})

// test('must display file names in given directory', function() {
//     actual = index.displayDirContents();
//     expected = ['kea.txt', 'kiwi.txt', 'nikau.txt', 'pohutukawa.txt']

//     expect(actual).toEqual(expected);
// })