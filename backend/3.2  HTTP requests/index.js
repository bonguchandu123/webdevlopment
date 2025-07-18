import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("hello");
});

app.listen(3000, () => {
    console.log('server started on port 3000.');
});
// app.get('/',(req,res)=>{
//     console.log("it is getr method ")
//     res.send()

// })
