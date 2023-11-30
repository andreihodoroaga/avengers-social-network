const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql");

const app = express();
app.use(express.json());
app.all("/graphql", createHandler({ schema }));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
