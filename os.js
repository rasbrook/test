const { log } = require('console')
const os=require('os')

console.log(os.machine())

console.log(os.uptime())


const currentos={
    name:os.type(),
    release:os.release(),
    total_memory:`${os.totalmem/100000000}GB`,
    free_memory:`${os.freemem/100000000}GB`,
}

console.log(currentos)