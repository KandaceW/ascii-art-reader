module.exports = "index.js";

const fs = require('fs');
const readline = require('readline');

console.log('Welcome User!')
console.log('-------------')


fs.readdir('./data', function (err, items) {
  for (let i = 0; i < items.length; i++) {
    console.log(i + 1 + ': ' + items[i])
  }
})

function whichArtwork() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  rl.question('Which artwork would you like to see?\n\n', function (input) {
    if (input == 1) { console.log('One was pressed') }
    if (input == 2) { console.log('Two was pressed') }
    rl.close()
  })
}

whichArtwork();