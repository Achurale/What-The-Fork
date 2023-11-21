import { useMutation, useQuery } from "@apollo/client";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

import { ADD_RECIPE } from "../utils/mutations";

import Auth from "../utils/auth";

const CreateRecipes = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: ["", "", ""],
    directions: "",
  });

  const [inputGroup, setInputGroup] = useState(3);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  };

  const handleAddIngredient = () => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
  };

  const handleDeleteIngredient = (ingredient, inputKey) => {
    console.log(ingredient);
    console.log(inputKey);
    // TODO: remove ingredient from specified index from formData.ingredients
  };

  const Inputs = ({ count }) =>
    formData.ingredients.map((_item, index) => (
      <InputGroup className="mb-4" key={index}>
        <Form.Control
          placeholder="Ingredient"
          aria-label="Ingredient"
          name={`formData.ingredients[${index}]`}
          value={formData.ingredients[index]}
          onChange={handleInputChange}
        />
        <Button
          variant="danger"
          id=""
          onClick={() =>
            handleDeleteIngredient(formData.ingredients[index], index)
          }
        >
          Delete
        </Button>
      </InputGroup>
    ));

  return (
    <>
      <div fluid className="text-dark bg-light p-5 mb-4">
        <Container>
          <h1>Create your Recipe</h1>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-4" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
              </Form.Group>
              <Form.Label>Ingredients</Form.Label>
              <Inputs count={inputGroup} />
              <Button
                variant="secondary"
                className="mb-4 w-100"
                onClick={handleAddIngredient}
              >
                Add Ingredient
              </Button>
              <Form.Group className="mb-4" controlId="directions">
                <Form.Label>Directions</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mb-4 w-100"
                size="lg"
              >
                Create Recipe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreateRecipes;
