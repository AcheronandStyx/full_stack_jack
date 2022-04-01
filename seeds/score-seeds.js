const sequelize = require("../config/connection");
const { Score } = require("../models");

const scoredata = [
  {
    score: 2300,
    user_id: 1,
  },
  {
    score: 345,
    user_id: 1,
  },
  {
    score: 234,
    user_id: 2,
  },
  {
    score: 123,
    user_id: 3,
  },
  {
    score: 343,
    user_id: 4,
  },
  {
    score: 3456,
    user_id: 4,
  },
  {
    score: 2345,
    user_id: 1,
  },
  {
    score: 678,
    user_id: 3,
  },
  {
    score: 34,
    user_id: 1,
  },
  {
    score: 23400,
    user_id: 2,
  },
  {
    score: 235300,
    user_id: 1,
  },
  {
    score: 2303450,
    user_id: 4,
  },
  {
    score: 1345,
    user_id: 3,
  },
];

const seedScores = () => Score.bulkCreate(scoredata, { individualHooks: true });

module.exports = seedScores;
