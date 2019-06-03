const fs = require('fs')
const readline = require('readline')

function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {
    rl.close()

    // Call any functions you like here. For example:
    loadFile(input)
  })
}

console.log("Welcome to John & Tessa's ASCII art reader")

fs.readdir('./data', function(err, data){
  for(var i = 0; i < data.length; i++){
    console.log(i, data[i])
  }
  
})
