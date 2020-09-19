const EventEmitter = require('events')

// Creating Class
class MyEmitter extends EventEmitter{

}

// Initializing the Object
const myEmitter = new MyEmitter();


// Event Listener
myEmitter.on('event',() => {
    console.log("Event Fired");
});


// Emit event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');