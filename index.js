const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql");
const db = require("./models");
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./config/constants');

const app = express();
app.use(express.json());

const checkAuthorization = async (req, res, next) => {
    const { authorization } = req.headers;
  
    if(!authorization) {
      next();
      return;
    }
  
    const token = authorization.replace('Bearer ', '');    
    const tokenPayload = jwt.verify(token, JWT_SECRET);
    const { exp, userId } = tokenPayload;

    if (Date.now() >= exp * 1000) {
        throw new Error('Token expired');
    }
  
    const user = await db.User.findByPk(userId);
    
    if(user) {
      req.user = user.dataValues;
    }
  
    next();
}

app.all("/graphql", checkAuthorization, createHandler({ schema, context: (req) => {
    // Return an object that will be accessible in all resolvers
    return req.raw.user;
}}));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
