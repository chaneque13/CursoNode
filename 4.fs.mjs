//asyncawait
//esto solo funciona con mjs, no en js
//tienen soporte para usar away en el cuerpo del archivo
//investigar IIFE 
import { readFile } from 'node:fs/promises'

console.log('leyendo primer archivo')

const text = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto', text)

console.log('me hago wey en lo que chambea lo demas')

console.log('leyendo el segundo archivo')
const secondtext = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto', secondtext)
