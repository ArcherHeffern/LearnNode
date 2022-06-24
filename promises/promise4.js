const util = require("util")
const { readFile } = require("fs")

//use util to increase readability and ease of making promises
//instead of making a large function that returns a promise, use util.promisify

const readFilePromise = util.promisify(readFile)

const results = async () => {
    try {
        let words = await readFilePromise("./texts/one.txt", "utf-8")
        console.log(words);
    } catch (error) {
        console.log(error);
    }
}

results()