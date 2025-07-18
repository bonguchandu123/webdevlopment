import express from "express"
 const app = express();
 const port = 3000;

 app.get("/", (req, res) => {
   const today = new Date();
   const day = today.getday(); 

   let type = "weekend"
   let adv = "its time to work"

   if(day == 0 || day == 6){
    type = "not a weekend";
    adv = "its time to fun";
   }
    res.render("index.ejs", {

    dataType : type,
    advice : adv,
    });

  });
   
 
 
 
 app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});