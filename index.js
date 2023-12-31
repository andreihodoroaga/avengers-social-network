const express = require("express");
const { createHandler } = require("graphql-http/lib/use/express");
const schema = require("./graphql");

const app = express();
app.use(express.json());
app.all("/graphql", createHandler({ schema, context: (req) => {
    // Return an object that will be accessible in all resolvers
    return { req };
}}));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
