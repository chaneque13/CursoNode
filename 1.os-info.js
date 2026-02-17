const os = require('node:os')

console.log('Info sistema')
console.log('-------------------')

console.log('Nombre', os.platform())
console.log('Version', os.release())
console.log('Arquitectura', os.arch())
console.log('Cpus', os.cpus()) //poder escalar procesos en node
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime()/ 60 / 60)
