const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "alfredo",
    email: "alfredo@pasta.com",
    password: "password1234",
  },
  {
    username: "marinara",
    email: "marinara@pasta.com",
    password: "password1234",
  },
  {
    username: "carbonara",
    email: "carbonara@pasta.com",
    password: "password1234",
  },
  {
    username: "bolognese",
    email: "bolognese@pasta.com",
    password: "password1234",
  },
  {
    username: "pesto",
    email: "pesto@pasta.com",
    password: "password1234",
  },
  {
    username: "bechamel",
    email: "bechamel@pasta.com",
    password: "password1234",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
