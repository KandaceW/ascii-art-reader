var fs = require("fs")
const readline = require('readline')

//As a user, I'd like to see a welcome message (so that I feel, y'know, welcome).
console.log("haere mai")

// fs.readFile('index.js', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });


//As a user, I'd like to view a list of ASCII artworks that can be displayed so that I can make my choice.
fs.readdir('./data', "utf8", function (err, data) {
  if (err) throw err;
  console.log("here is a list of ASCII artworks that can be displayed: ");
  for (i = 0; i < data.length; i++) {
    console.log(i + ": " + data[i])
  }
})

//As a user, when I enter the number next to an artwork in the list, the artwork will be displayed (so that I can see it!)


function pressEnter() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {


    // Call any functions you like here. For example:
    loadFile(input)
    rl.close()
  })
}

pressEnter()