const EventEmitter = require("events")
const eventEmitter = new EventEmitter
eventEmitter.on("boop", () => {
    console.log("Hello world");
})


eventEmitter.emit("boop")
