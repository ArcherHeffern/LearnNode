const fs = require("fs");
//convert the async functions to promises to make callbacks less messy
//then later call the promises using then to clean up code

// --------------------------------------------------------------------------
let readFileAsync = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, result) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(result)
            }
        })
    })
}

// --------------------------------------------------------------------------

let writeFileAsync = (url, words) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(url, words, { flag: "a" }, (err) => {
            if (err) { reject(err) }
            else { resolve("sucessfully added content") }
        })
    })
}

// --------------------------------------------------------------------------

readFileAsync("./texts/one.txt")
    .then(result => {
        console.log(result)
        return result
    })
    .then(result => {
        writeFileAsync("./texts/junk.txt", result)
        return;
    })
    .then(() => readFileAsync("./texts/junk.txt"))
    .then(result => console.log(`\n${result}`))
    .catch(err => console.log(err))



// const result = async () => {
//     try {
//         let one = await asyncFunction1("./texts/one.txt")
//         let two = await asyncFunction2("./texts/two.txt")
//         console.log(one);
//         console.log(two);
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// --------------------------------------------------------------------------

