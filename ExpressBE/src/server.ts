import express from "express";
var app = express();
var router1 = require("./router/router1test");
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/", (req: any, res: any) => {
  res.json("Moi");
});

app.use("/database/", router1);

app.listen(3000, () => {
  console.log("server started");
});
