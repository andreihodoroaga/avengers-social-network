const { JWT_SECRET } = require('../../../config/constants');
const db = require('../../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginResolver = async (_, { username, password }, context) => {
  const user = await db.User.findOne({
    where: {
      username,
    }
  });

  const passwordIsValid = bcrypt.compareSync(password, user.password);

  if(passwordIsValid) {
    return {
      token: jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: '30m'
      }),
    }
  }

  return {
    token: null,
  }
}
module.exports = loginResolver