import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { Container, Col, Form, Button, Card, Row } from "react-bootstrap";
import { SAVE_RECIPE } from "../utils/mutations";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import { searchSpoonacularRecipes } from "../utils/API";
import { saveRecipeIds, getSavedRecipeIds } from "../utils/localStorage";

const SearchRecipes = () => {
  const [customRecipes, setCustomRecipes] = useState([]);
  // create state for holding returned spoonacular api data
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  const [saveRecipe, { error }] = useMutation(SAVE_RECIPE);

  // create state to hold saved bookId values
  const [savedRecipeIds, setSavedRecipeIds] = useState(getSavedRecipeIds());

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  useEffect(() => {
    return () => saveRecipeIds(savedRecipeIds);
  });

  // create method to search for books and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
      const customResponse = await localStorage.getItem(searchInput);

      const response = await searchSpoonacularRecipes(searchInput);

      if (!response.ok) {
        throw new Error("something went wrong!");
      }

      const itemsCustom = customResponse;

      console.log("Items: ", itemsCustom);
      if (itemsCustom) {
        const customRecipeData = itemsCustom.map((recipe) => ({
          recipeId: recipe.id,
          source: recipe.sourceName || ["No source to display"],
          title: recipe.title,
          description: recipe.summary,
        }));
        setCustomRecipes(customRecipeData);
      }
      const data = await response.json();
      const items = data.results;

      console.log("Data: ", data);
      console.log("Items: ", items);

      const recipeData = items.map((recipe) => ({
        recipeId: recipe.id,
        source: recipe.sourceName || ["No source to display"],
        sourceUrl: recipe.sourceUrl,
        title: recipe.title,
        description: recipe.summary,
        image: recipe.image || "",
      }));

      setSearchedRecipes(recipeData);
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a book to our database
  const handleSaveRecipe = async (recipeId) => {
    // find the book in `searchedBooks` state by the matching id
    const recipeToSave = searchedRecipes.find(
      (recipe) => recipe.recipeId === recipeId
    );

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }
    console.log(recipeToSave);

    try {
      await saveRecipe({ variables: recipeToSave });

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // if book successfully saves to user's account, save book id to state
      setSavedRecipeIds([...savedRecipeIds, recipeToSave.recipeId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="text-dark bg-light p-5 text-center">
        <Container>
          <h1>Search Recipes</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a recipe"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="warning" size="lg">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className="pt-5 text-center">
          {searchedRecipes.length
            ? `Viewing ${searchedRecipes.length} results:`
            : "Search Results..."}
        </h2>
        <Row>
          {searchedRecipes.map((recipe) => {
            return (
              <Col md="4" key={recipe.recipeId} className="mb-4">
                <Card class="card" border="dark">
                  <Link as={Link} to={`/recipe/${recipe.recipeId}`}>
                    {recipe.image ? (
                      <Card.Img
                        border="5rem"
                        src={recipe.image}
                        alt={`The image for ${recipe.title}`}
                        variant="top"
                      />
                    ) : null}
                  </Link>
                  <Card.Body>
                    <Card.Title className="text-center">
                      {recipe.title}
                    </Card.Title>
                    <p className="small text-center">
                      Source:{" "}
                      <a
                        href={`${recipe.sourceUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        {recipe.source}{" "}
                      </a>
                    </p>
                    <Card.Text
                      dangerouslySetInnerHTML={{ __html: recipe.description }}
                    ></Card.Text>
                    {Auth.loggedIn() && (
                      <Button
                        disabled={savedRecipeIds?.some(
                          (savedRecipeId) => savedRecipeId === recipe.recipeId
                        )}
                        className="btn-block btn-dark"
                        onClick={() => handleSaveRecipe(recipe.recipeId)}
                      >
                        {savedRecipeIds?.some(
                          (savedRecipeId) => savedRecipeId === recipe.recipeId
                        )
                          ? "Recipe Saved"
                          : "Save Recipe"}
                      </Button>
                    )}
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

export default SearchRecipes;
