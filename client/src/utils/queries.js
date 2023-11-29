import { gql } from "@apollo/client";

export const GET_ME = gql`
query me($profileId: ID!) {
  username
  _id
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
