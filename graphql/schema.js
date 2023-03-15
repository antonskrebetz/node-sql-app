const {buildSchema} = require('graphql')

module.exports = buildSchema(`
    type Todo {
        id: ID!
        title: String!
        done: Boolean!
        createdAt: String
        updatedAt: String
    }

    input TodoInput {
        title: String!
    }

    type Query {
        getTodos: [Todo!]!
    }

    type Mutation {
        createTodo(todo: TodoInput!): Todo!
        completeTodo(id: ID!): Todo!
        deleteTodo(id: ID!): Boolean!
    }
`)