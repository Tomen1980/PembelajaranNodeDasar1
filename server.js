const Logger = require("./logger");

const logger = new Logger();

logger.on("message",data => console.log("called listen ",data))

logger.log("Hello World");
logger.log("HI");
logger.log("hello")
