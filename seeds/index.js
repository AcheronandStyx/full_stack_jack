const seedUsers = require("./user-seeds");
const seedScores = require("./score-seeds");

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
    await seedScores();
    process.exit(0);
  };
  
  seedAll();