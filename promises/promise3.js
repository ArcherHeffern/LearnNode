const fs = require("fs");
// instead of using .then and .catch, we can use async and await to clean the code up even more

// --------------------------------------------------------------------------
let asyncFunction1 = (url) => {
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
const asyncFunction2 = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, data) => {
            if (err) { reject(err) }
            else if (data) {
                resolve(data)
            };
        })
    })
}

const result = async () => {
    try {
        let one = await asyncFunction1("./texts/one.txt")
        let two = await asyncFunction2("./texts/two.txt")
        console.log(one);
        console.log(two);
    }
    catch (err) {
        console.log(err);
    }
}
// --------------------------------------------------------------------------
result()

