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

export const QUERY_SINGLE_PROFILE = gql`
query user {
  recipeCount
  savedRecipes {
    recipeId
    authors
    description
    title
    image
  }
}

`
