const EventEmitter = require('events'); // it is class :- camaleCasing 
const event = new EventEmitter;

// Register a listner 
event.on('piyushCalledMessage', ()=>{
    console.log( ' it is called ');
})

// Raise an event
event.emit('piyushCalledMessage');
