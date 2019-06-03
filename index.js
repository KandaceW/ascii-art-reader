// const fs = require('fs')
// const readline = require('readline');

// const readInput = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// })

// console.log("Kia ora! Welcome to our ASCII art generator");
// console.log()
// console.log()
// readInput.question('Please select some ASCII art to view!', (answer) => {
 
//     if(answer == 1){
//         fs.readFile('/home/student/workspace/ascii-art-reader/data/kea.txt','utf8', (err, data)=>{
//             if (err) throw err;
//             console.log(data)
//         })
//     }else if(answer ==2){
//         fs.readFile('/home/student/workspace/ascii-art-reader/data/kiwi.txt', 'utf8', (err, data)=>{
//             console.log(data)
//         } )
//     }else if(answer ==3){
//         fs.readFile('/home/student/workspace/ascii-art-reader/data/nikau.txt', 'utf8', (err, data)=>{
//             console.log(data)
//         } )
//     }else if (answer ==4){
//         fs.readFile('/home/student/workspace/ascii-art-reader/data/pohutukawa.txt', 'utf8', (err,data)=>{
//             console.log(data)
//         })
//     }
// })
// console.log()

// fs.readdir("/home/student/workspace/ascii-art-reader/data", (err, files) => {
//     // var files = [kea.txt, kiwi.txt, nikau.txt, pohutukawa.txt]
//     for (var i = 0; i < files.length; i++) {
//         console.log(i+1 + ": " + files[i])
//     }
// })

