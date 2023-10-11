// file system
const fs = require('fs');

// write operation
// fs.writeFile(
//     "public/test.txt",
//     "",
//     (err) => {
//         console.log(err);
//     }
// )

// read operation
// fs.readFile(
//     "public/demo.txt",
//     (err, data) => {
//         if (err) console.log(err)
//         else console.log(data.toString());
//     }
// )

// update operation
// fs.appendFile(
//     "public/demo.txt",
//     " Welcome dosto!",
//     (err) => {
//         if (err) console.log(err);
//     }
// )

// delete operation
fs.unlink(
    "public/test.txt",
    (err) => {
        if (err) console.log(err);
    }
)