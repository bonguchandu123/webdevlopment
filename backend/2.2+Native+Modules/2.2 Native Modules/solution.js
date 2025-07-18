const fs = require("fs");

fs.writeFile("message.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
//  fs.writeFile("m.txt","hi welocme",(err)=> {
  // }

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
// fs.readFile("m.txftr","utf-8",(err,data) => {

// })
