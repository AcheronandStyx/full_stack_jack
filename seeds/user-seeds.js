const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "alfredo",
    email: "alfredo@pasta.com",
    password: "password1234",
    wins: 28,
    losses: 7,
  },
  {
    username: "marinara",
    email: "marinara@pasta.com",
    password: "password1234",
    wins: 5,
    losses: 3,
  },
  {
    username: "carbonara",
    email: "carbonara@pasta.com",
    password: "password1234",
    wins: 18,
    losses: 17,
  },
  {
    username: "bolognese",
    email: "bolognese@pasta.com",
    password: "password1234",
    wins: 27,
    losses: 2,
  },
  {
    username: "pesto",
    email: "pesto@pasta.com",
    password: "password1234",
    wins: 7,
    losses: 2,
  },
  {
    username: "bechamel",
    email: "bechamel@pasta.com",
    password: "password1234",
    wins: 7,
    losses: 87,
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
