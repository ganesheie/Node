const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolvers = require("./resolvers");
const authMiddleware = require("./middlewares/auth");
const { sequelize } = require("./models");
require("dotenv").config();

const app = express();

// Middleware for JWT authentication
app.use(authMiddleware);

// GraphQL Endpoint
app.use(
  "/graphql",
  graphqlHTTP((req) => ({
    schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL UI for testing
    context: { user: req.user },
  }))
);

const PORT = process.env.PORT || 4000;

// Start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/graphql`);
  });
});
