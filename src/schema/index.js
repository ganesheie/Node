const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Course {
    id: ID!
    title: String!
    description: String
    duration: String
    outcome: String
  }

  type Collection {
    id: ID!
    name: String!
    courses: [Course!]
  }

  type User {
    id: ID!
    username: String!
    token: String
  }

  input CourseInput {
    title: String!
    description: String
    duration: String
    outcome: String
  }

  type Query {
    courses(limit: Int, sortOrder: String): [Course!]
    course(id: ID!): Course
    collections: [Collection!]
    collection(id: ID!): Collection
  }

  type Mutation {
    addCourse(input: CourseInput!): Course!
    updateCourse(id: ID!, input: CourseInput!): Course!
    deleteCourse(id: ID!): String!

    register(username: String!, password: String! , role: String!): User!
    login(username: String!, password: String!): User!
  }
`);

module.exports = schema;
