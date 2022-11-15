// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
// allows for the user to add comments 
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    comments: [Comment]
  }
  type Comment {
    _id: ID
    comment_text: String
    username: String
    user_id: String
    post_id: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(_id: ID!): Comment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(comment_text: String!): Comment
    
  }
`;
// export the typeDefs
module.exports = typeDefs;
