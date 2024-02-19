const Logger = require('./emmiterClass');
const logger = new Logger;


logger.on('piyushCalled', (e) => {
    console.log('from Acces Emitter ', e);
});

logger.logFun("Hi from piyush");