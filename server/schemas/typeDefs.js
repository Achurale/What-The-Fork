const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    recipeCount: Int
    savedRecipes: [Recipe]!
  }

  type Recipe {
    recipeId: ID
    authors: [String]
    description: String
    title: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveRecipe(authors: [String], description: String!, title: String!, recipeId: ID!, image: String!): User
    removeRecipe(recipeId: ID!): User
  }
`;

module.exports = typeDefs;
