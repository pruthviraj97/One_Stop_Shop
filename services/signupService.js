const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { response } = require("express");
const { sendMail } = require("./email");

const { User } = require("../models/User");

async function signupService(data) {
  let encryptedPassword = bcrypt.hashSync(data.password, 10);

  // console.log(encryptedPassword);

  let responseData = {};

  //   console.log(data);
  const user = await User.create({
    firstName: data.firstName,
    lastName: data.lastName,
    emailId: data.emailId,
    password: encryptedPassword,
    role: 200,
    phoneNumber: data.phoneNumber,
  })
    .then(function (item) {
      console.log("ITEM", item);
      responseData = {
        message: "User Created",
        status: 200,
        error: "",
        userObject: item,
      };

      // console.log("sendEmail");
      // console.log("dataEmail",data.emailId);
      sendMail(
        data.emailId,
        "Welcome To OneStop",
        "Your account created succefully"
      );
    })
    .catch(function (error) {
      console.log("ERROR", error);
      responseData = { message: "Error", status: 501, error: error.errors };
      //   return "test";
    });
  console.log(user);

  return responseData;
}

module.exports = { signupService };
