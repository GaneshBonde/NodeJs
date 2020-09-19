const EventEmitter = require('events')
const uuid = require('uuid')

// sample uuid generated
console.log(uuid.v4());
console.log(uuid.v4());
console.log(uuid.v4());

class Logger extends EventEmitter{
    log(msg){
        // Call emit
        // this.emit('message',{id: uuid.v4(), msg:msg})
        this.emit('message',{id: uuid.v4(), msg})
        this.emit('message2', "Ganesh Bonde")
    }
}


module.exports = Logger