import express from "express";
import bodyParser from "body-parser";
import pg form "pg";


const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});
db.connect();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries" );
  let countries  = [];
result.row.array.forEach(country => {
  countries.push(countrie.country_code);

});
}

app.get("/", (req, res) =>  {
const countries = await checkVisisted();
res.render("index.ejs", {countries: countries, total: countries.length });
});






  //Write your code here.


app.post("/add", async (req, res) => {
const input = req.body["country"];
try{
const result = await db.query("SELECT country_code FROM countries WHERE country_name = $1 ", [input]);

try{

  const data = results.row[0];
  const countryCode = data.countrie_code;
  await db.query("INSERT INTO visited_countries (country_Code) VALUES($1)" [countryCode]);
}










app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});



