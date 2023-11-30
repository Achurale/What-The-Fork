import { useMutation, useQuery } from "@apollo/client";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

import { GET_ME } from "../utils/queries";
import { REMOVE_RECIPE } from "../utils/mutations";
import { removeRecipeId } from "../utils/localStorage";
import {Link} from 'react-router-dom'

import Auth from "../utils/auth";
import { useEffect } from "react";

const SavedRecipes = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeRecipe, { error }] = useMutation(REMOVE_RECIPE);
  const userData = data?.me || {};

useEffect(() => {
  console.log("loading", loading)
  console.log("data", data);
  console.log("userData", userData);
}, [data]);

  // create function that accepts the recipe's mongo _id value as param and deletes the recipe from the database
  const handleDeleteRecipe = async (recipeId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await removeRecipe({ variables: { recipeId } });

      // upon success, remove book's id from localStorage

      removeRecipeId(recipeId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2 className='text-center'>LOADING...</h2>;
  }

  return (
    <>
      <div fluid className="text-dark bg-light p-5">
        <Container className='text-center'>
          <h1>Viewing favorite recipes:</h1>
        </Container>
      </div>

      <Container>
        <h2 className="pt-5 text-cente">
          {userData.savedRecipes?.length
            ? `Viewing ${userData.savedRecipes.length} saved ${
                userData.savedRecipes.length === 1 ? "recipe" : "recipes"
              }:`
            : "You have no saved recipes"}
        </h2>
        <Row>
          {userData.savedRecipes?.map((recipe) => {
            return (
              <Col md="4" key={recipe.recipeId} className="mb-4">
                <Card key={recipe.recipeId} border="dark">
                  {recipe.image ? (
                    <Card.Img
                      border='5rem'
                      src={recipe.image}
                      alt={`The image for ${recipe.title}`}
                      variant="top"
                    />
                  ) : null}
                  <Card.Body>
                    <Card.Title>{recipe.title}</Card.Title>
                    {/* <p className="small">Authors: {recipe.authors}</p> */}
                    <Card.Text>{recipe.description}</Card.Text>
                    <Button
                      className="btn-block btn-danger"
                      onClick={() => handleDeleteRecipe(recipe.recipeId)}
                    >
                      Delete Recipe
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default SavedRecipes;
