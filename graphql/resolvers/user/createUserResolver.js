const bcrypt = require('bcrypt');
const db = require("../../../models");

const createUserResolver = async (_, { user}) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);

  const newUser = await db.User.create({
    ...user,
    password: hashedPassword,
    profile_picture: null
  });

  return newUser;
};

module.exports = createUserResolver;
