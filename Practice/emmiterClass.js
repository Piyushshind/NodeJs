const EventEmitter = require('events');

class Logger extends EventEmitter {
    logFun(mes) {
        console.log(mes);
        this.emit('piyushCalled', { id: 7, url: 'http://piyush/post' })
    }
};

module.exports = Logger;