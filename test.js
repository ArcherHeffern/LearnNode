const fs = require("fs");
// --------------------------------------------------------------------------
let function1 = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, result) => {
            if (err) { reject(err) }
            else if (result) { resolve(result) }
        })
    })
}
const result = async () => {
    try {
        let one = await function1("./one.txt")
        console.log(one);
    }
    catch (err) {
        console.log(err);
    }
}
// --------------------------------------------------------------------------
const function2 = (url) => {
    return new Promise((resolve, reject) => {
        fs.readFile(url, "utf-8", (err, data) => {
            if (err) { reject(err) }
            else if (data) {
                resolve(data)
            };
        })
    })
}

const result2 = async () => {
    try {
        let one = await function2("./two.txt")
        console.log(one);
    }
    catch (err) {
        console.log(err);
    }
}
// --------------------------------------------------------------------------
result()
result2()