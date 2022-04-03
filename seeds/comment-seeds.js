const sequelize = require("../config/connection");
const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "blah blah blah",
    user_id: 1,
  },
  {
    comment_text: "blarghhhhh",
    user_id: 1,
  },
  {
    comment_text: "hgfawsfagSDF",
    user_id: 3,
  },
  {
    comment_text: "segadsfgfsdgf",
    user_id: 1,
  },
  {
    comment_text: "SGasrterhgadfh",
    user_id: 1,
  },
  {
    comment_text: "SGADRHASDFHG",
    user_id: 2,
  },
  {
    comment_text: "baersgaefhgaert",
    user_id: 2,
  },
  {
    comment_text: "blahWSRGADFGh",
    user_id: 4,
  },
  {
    comment_text: "blhQ34T6WERG65h",
    user_id: 5,
  },
  {
    comment_text: "blaasdehgg6w54uhkjih",
    user_id: 3,
  },
  {
    comment_text: "bla3574hyfg765h",
    user_id: 3,
  },
];

const seedComments = () =>
  Comment.bulkCreate(commentData, { individualHooks: true });

module.exports = seedComments;
