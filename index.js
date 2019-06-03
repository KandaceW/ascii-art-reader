module.exports = {
    welcomeMessage,
    displayDirContents,
    pressEnter,
}
const fs = require('fs')
const readline = require('readline')




function welcomeMessage() {
    console.log("What's good?")
}



function displayDirContents(callback) {
    fs.readdir('./data', function(err, files) {
        callback(files)       
    })  
}



function pressEnter () {

    let difArr = displayDirContents(function(difArr) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          })
        
          rl.question('Which file should I load? ', function (input) {
            rl.close()
          
            fs.readFile(`${__dirname}/data/${difArr[input]}`, 'utf8', (err, contents) => {
              if (err) throw err;
              console.log(contents)
            })
          })
    })
  }

// displayDirContents()

welcomeMessage()
pressEnter()
