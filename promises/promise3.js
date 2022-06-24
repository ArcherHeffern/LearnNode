const fs = require("fs");
// instead of using .then and .catch, we can use async and await to clean the code up even more

// --------------------------------------------------------------------------
let readFileAsync = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, result) => {
            if (err) { reject(err) }
            else { resolve(result) }
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

// readFileAsync("./texts/one.txt")
//     .then(result => {
//         console.log(result)
//         return result
//     })
//     .then(result => {
//         writeFileAsync("./texts/junk.txt", result)
//         return;
//     })
//     .then(() => readFileAsync("./texts/junk.txt"))
//     .then(result => console.log(`\n${result}`))
//     .catch(err => console.log(err))

const results = async function () {
    try {
        let textOne = await readFileAsync("./texts/one.txt")
        console.log(textOne)
        await writeFileAsync("./texts/junk.txt", textOne)
        let trashText = await readFileAsync("./texts/junk.txt")
        console.log(trashText)
    } catch (error) {
        console.log(error);
    }

}

results()