console.log('Welcome');
const fs = require('fs')
const readline = require('readline')

var display =  fs.readdir("./data",'utf8', function(err, files){
  
  var count = 0
  var newArr = []
  for (let i = 0; i < files.length; i++) {
    newArr.push(count + ": " + files[i])
    count++
    
    
  }
  console.log('Made by carrydan');
  
  console.log(newArr);
})

function pressEnter () {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.question('Which file should I load? ', function (input) {
    rl.close()

    // Call any functions you like here. For example:
  
    
// console.log(input);

    switch (input){
      case '1':
        fs.readFile('./data/kea.txt','utf8', function(err, data){
        console.log(data);
        })
        break;
      case '2':
        fs.readFile('./data/kiwi.txt','utf8', function(err, data){
        console.log(data);
        })
        break;
      case '3':
        fs.readFile('./data/nikau.txt','utf8', function(err, data){
        console.log(data);
        })
        break;
      case '4':
        fs.readFile('./data/pohutukawa.txt','utf8', function(err, data){
        console.log(data);
        })
        break;
    }

  //   if(input == 0){
  //    fs.readFile('./data/kea.txt','utf8', function(err,data){
  //      console.log(data);
  //    })
  //   } else if(input == 1){
  //     fs.readFile('./data/kea.txt','utf8', function(err,data){
  //       console.log(data);
  //     })
  //    } else if(input == 3){
  //     fs.readFile('./data/kea.txt','utf8', function(err,data){
  //       console.log(data);
  //     })
  //    } else if(input == 4){
  //     fs.readFile('./data/kea.txt','utf8', function(err,data){
  //       console.log(data);
  //     })
  //    }
  //   if(input >= 5){
  //     console.log('Selection not available')
  //   }
  })
}

pressEnter()