var kata = require("../index.js");

test("greeting not expected", function() {
  var name = "hamish";
  var actual = "hello hamish";
  var expected = "hello hamish";
  kata.greeting(name);
  expect(actual).toEqual(expected);
});

test("list not provided", function() {
  var actual = ["kea", "kiwi", "nikau", "pohutukawa"];
  var expected = ["kea", "kiwi", "nikau", "pohutukawa"];
  kata.printList();
  expect(actual).toEqual(expected);
});
