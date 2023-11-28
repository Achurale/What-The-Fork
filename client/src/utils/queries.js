import { gql } from "@apollo/client";

export const GET_ME = gql`
  query Me {
    me {
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

