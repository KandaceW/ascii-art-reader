var fs = require("fs")
const readline = require('readline')

//As a user, I'd like to see a welcome message (so that I feel, y'know, welcome).
console.log("haere mai")


//As a user, I'd like to view a list of ASCII artworks that can be displayed so that I can make my choice.
function mainMenu() {
fs.readdir('./data', "utf8", function (err, data) {
  if (err) throw err;
  console.log("here is a list of ASCII artworks that can be displayed: ");
  for (i = 0; i < data.length; i++) {
    console.log(i + ": " + data[i])
  }
})
}

mainMenu()
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
 

function loadFile(input) {
  fs.readdir('./data', "utf8", function (err, data) {
    // console.log(data)
    // console.log(input)
    // console.log(data[input])

    var file = './data/' + data[input];
   // console.log(file)

    fs.readFile(file, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
      nextChoice()
    });
  })
}

//As a user, I want the menu to display again after I view an artwork so that I can choose another one.
function nextChoice() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Press enter to continue', function() {


    // Call any functions you like here. For example:
    mainMenu()

    rl.question('Which file should I load? ', function (input) {


      // Call any functions you like here. For example:
      loadFile(input)
      rl.close()
    })
  })
}
