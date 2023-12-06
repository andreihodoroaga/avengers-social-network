const { Sequelize } = require('sequelize');

const posts = [
  {
    post_id: "1",
    text: "Post 1",
    timestamp: new Date(),
    parent_post_id: null,
  },
  {
    post_id: "2",
    text: "Post 2",
    timestamp: new Date(),
    parent_post_id: null,
  },
  {
    post_id: "3",
    text: "Post 3",
    timestamp: new Date(),
    parent_post_id: null,
  },
];

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'tables.db'
});

sequelize.sync();
module.exports = { sequelize };
