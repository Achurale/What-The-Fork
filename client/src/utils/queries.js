import { gql } from "@apollo/client";

export const GET_ME = gql`
query me {
        recipeCount
        savedRecipes {
          recipeId
          authors
          description
          title
          image
        }
      }
`;

