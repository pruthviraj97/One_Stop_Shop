const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const { response } = require("express");

const { User } = require("../models/User");
const { Address } = require("../models/Address");

async function addAddressService(data, emailId) {

  console.log(data);

  let responseData;

  if (data.type == "Add") {

    let user = await User.findOne({
      where: {
        emailId: emailId,
      },
    });

    
    const address = await Address.create({
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      city: data.city,
      state: data.state,
      country: data.country,
      zipcode: data.zipcode,
      phoneNumber: data.phoneNumber,
      UserId: user.id,
    })
      .then(function (item) {
        responseData = {
          message: "New Address Created",
          status: 200,
          error: "",
          addressObject: item,
        };

      })
      .catch(function (error) {
        console.log("ERROR", error);
        responseData = { message: "Error", status: 501, error: error.errors };
      });
  } else if (data.type == "Edit") {
    //let responseData;
    const address = await Address.update(
      {
        firstName: data.firstName,
        lastName: data.lastName,
        address: data.address,
        city: data.city,
        state: data.state,
        country: data.country,
        zipcode: data.zipcode,
        phoneNumber: data.phoneNumber,
      },
      {
        where: {
          id: data.addressId,
        },
      }
    )
      .then(function (item) {
        responseData = {
          message: "Address Updated",
          status: 200,
          error: "",
          userObject: item,
        };
      })
      .catch(function (error) {
        console.log("ERROR", error);
        responseData = { message: "Error", status: 501, error: error.errors };
      });
  }

  return responseData;
}

module.exports = { addAddressService };
