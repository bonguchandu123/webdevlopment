const fs = require("fs")

fs.writeFile("message.txt",hi chandu,(err) => {
    if (err) throw err;
    console.log('The file has been saved!');
}