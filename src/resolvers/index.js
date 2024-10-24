const courseResolvers = require("./course");
const authResolvers = require("./auth");

const resolvers = {
  ...courseResolvers,
  ...authResolvers,
};

module.exports = resolvers;
