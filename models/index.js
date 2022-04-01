// import the models
const Score = require("./Score");
const User = require("./User");

// Associations
User.hasMany(Score, {
  foreignKey: "user_id",
  onDelete: "CASCADE", // if user is deleted delete all associated scores
});

Score.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Score };
