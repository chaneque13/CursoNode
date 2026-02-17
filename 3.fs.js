//readfile
//const fs = require('node:fs')

//readfileSync es sincrono

//esto realiza cosas asincronaas, lee el primero la linea 12 antes que el primer archivo
/*
console.log('Leyendo el primer archivo')
fs.readFile('./archivo.txt', 'utf-8', (err, text)=>{ //callback
    console.log('primer texto', text)

})
console.log('hacer cosas mientras lee el archivo')

console.log('Leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text)=>{
    console.log('segundo texto', text)
})
*/
//Para usar promises
const fs = require('node:fs/promises')

console.log('Leyendo el primer archivo')

fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log('primer texto', text)
    })

console.log('leyendo segundo archivo')  
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log('segundo texto', text)
    })    
//tambien se puede usar promisify, pero es mejor lo nativo
