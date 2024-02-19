const EventEmitter = require('events'); // it is class :- camaleCasing 
const event = new EventEmitter;

// Register a listner 
event.on('piyushCalledMessage', (e)=>{
    console.log( ' it is called ' , e);
})

// Raise an event
event.emit('piyushCalledMessage', {id:1,url:'http://piyush/get'});
