const { readFile } = require("fs")

//callback hell
//How to improve: make readfile a promise and then use async await
//callbacks are nested which adds visual complexity
readFile("./texts/one.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
        readFile("./texts/two.txt", "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            }
            else { console.log(data) }
        })
    }
})
