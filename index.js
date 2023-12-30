const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql");
const JWTMiddleware = require('./middlewares/JWTMiddleware');

const app = express();
app.use(express.json());
app.all("/graphql", JWTMiddleware, createHandler({ schema }));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
