// importing gql tagged template function
const { gql } = require("apollo-server-express");

// create the typeDefs
const typeDefs = gql`
    type Book {
        authors: [String]
        description: String
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type User {
        _id: ID 
        username: String!
        email: String!
        bookCount: Int
        saveBooks: [Book]
    }

    type Auth {
        token: ID
        user: User
    }

    input SaveBookInput {
        authors: [String]
        title: String
        description: String
        bookId: String
        image: String
        link: String
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: SaveBookInput): User
        removeBook(bookId: String!): User
    }

`;

module.exports = typeDefs
