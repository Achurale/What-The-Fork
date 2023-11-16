import { gql } from "@apollo/client";

export const GET_ME = gql`
query me {
    me {
        _id
        username
        email
        recipeCount
        savedRecipes {
          recipeId
          authors
          description
          title
          image
        }
      }
}
`;

