// import the models
const Score = require("./Score");
const User = require("./User");
const Comment = require("./Comment");

// Associations
User.hasMany(Score, {
  foreignKey: "user_id",
  onDelete: "CASCADE", // if user is deleted, delete all associated scores
});

Score.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "SET NULL",
});

module.exports = { User, Score, Comment };

// add new column for the betting logic
// add bet column with default amounts to the score table
