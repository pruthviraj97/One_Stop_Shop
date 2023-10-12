const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const url = require("url");

app.get("/addAddress", urlencodedParser, async function (request, response) {
  response.render("addAddress");
});

module.exports = router;
