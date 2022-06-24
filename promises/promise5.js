const { readFile, writeFile } = require("fs").promises

const result = async () => {
    let words1 = await readFile("./texts/one.txt", "utf-8")
    let words2 = await readFile("./texts/two.txt", "utf-8")
    console.log(words1, words2);
}

result()