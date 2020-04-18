const EventMitter = require("events");
const uuid = require("uuid");

class Logger extends EventMitter{
    log(msg){
        //Call Event
        this.emit("message",{id:uuid.v4(), msg});
    }
}

module.exports = Logger;