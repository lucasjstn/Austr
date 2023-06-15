const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (request, response) => {
  response.send("Express");
});

app.listen(port, ()=> {
  console.log(`[Server]: Server is runnig at http://localhost:${port}`);
});
