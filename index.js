const fs = require('fs');
const readline = require('readline');
const artChoice = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log("Hello and welcome to our ASCII index.")

artChoice.question("What art do you want displayed?", (answer) =>{
  if(answer == 0){
    fs.readFile('./data/kea.txt', 'utf8', (err, data) =>{
      console.log(data)
    })
  }
  else if(answer == 1){
    fs.readFile('./data/kiwi.txt', 'utf8', (err, data) =>{
      console.log(data)
    })
  }
  else if(answer == 2){
    fs.readFile('./data/nikau.txt', 'utf8', (err, data) =>{
      console.log(data)
    })
  }
  else if(answer == 3){
    fs.readFile('./data/pohutukawa.txt', 'utf8', (err, data) =>{
      console.log(data)
    })
  }
  else{
    console.log((answer), "is not a choice try 0-3")
  }
  
  artChoice.close()
})

fs.readdir('./data', 'utf8', function (err, files) {
  console.log()
  for (var i = 0; i < files.length; i++) {
    console.log(i + ": " + files[i])

  }
})

