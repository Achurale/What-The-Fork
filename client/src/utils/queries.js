import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
      _id
      username
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
