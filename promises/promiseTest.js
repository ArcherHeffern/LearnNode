const fs = require("fs")

let writeFileAsync = (url, words) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, words, { flag: "a" }, (err) => {
            if (err) { reject(err) }
            else { resolve("sucessfully added content") }
        })
    })
}

writeFileAsync("./texts/junk.txt", "Hello world")
    .then(result => console.log(result))
    .catch(err => console.log(err))