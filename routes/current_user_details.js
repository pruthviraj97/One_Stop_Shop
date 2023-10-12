const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const {
  get_logged_user_service,
} = require("../services/get_current_user_details");

app.get(
  "/get-logged-user",
  urlencodedParser,
  async function (request, response) {
    console.log("Cookies", request.cookies);

    let cookie = request.headers.cookie;

    var output = {};
    cookie.split(/\s*;\s*/).forEach(function (pair) {
      pair = pair.split(/\s*=\s*/);
      var name = decodeURIComponent(pair[0]);
      var value = decodeURIComponent(pair.splice(1).join("="));
      output[name] = value;
    });

    console.log(output);

    let emailId = output.emailId;

    console.log("EmailId", emailId);
    if (emailId == null || emailId == undefined) {
      response.send({ status: 401, message: "User not logged In" });
    } else {
      let res;

      res = await get_logged_user_service(emailId);

      response.send(res);
    }
  }
);

module.exports = router;
