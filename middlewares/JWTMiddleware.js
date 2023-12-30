const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/constants')

const JWTMiddleware = (request, response, next) => {
  const authorization = request.headers.authorization;
  
  const requestBody = JSON.stringify(request.body.query);

  // TODO: find a better solution than this check
  if (requestBody.includes('login')) {
    next();
    return;
  }
  
  if (request && !authorization) {
    return response.status(401).json({ error: 'Unauthorized' });
  }

  const token = authorization.replace('Bearer ', '');    

  try {
      const tokenPayload = jwt.verify(token, JWT_SECRET);
      request.tokenPayload = tokenPayload;
      next();
  } catch (e) {
      next();
      return;
  }    
}

module.exports = JWTMiddleware;