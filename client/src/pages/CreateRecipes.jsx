import { useMutation, useQuery } from "@apollo/client";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

import { ADD_RECIPE } from "../utils/mutations";

import Auth from "../utils/auth";
  const Inputs = ({ formData, handleInputChange, handleDeleteIngredient }) =>{


   return formData.ingredients.map((_item, index) => (
      <InputGroup className="mb-4" key={index}>
        <Form.Control
          placeholder="Ingredient"
          aria-label="Ingredient"
          name={index}
          // defaultValue={""}
          value={formData.ingredients[index]}
          onChange={(e)=>handleInputChange(e,index)}
        />
        <Button
          variant="danger"
          id=""
          onClick={() =>
            handleDeleteIngredient(_item, index)
          }
        >
          Delete
        </Button>
      </InputGroup>
    ));
  }
const CreateRecipes = () => {
    
  const [addRecipe, { error }] = useMutation(ADD_RECIPE);
  const [formData, setFormData] = useState({
    title: "",
    ingredients: ["", "", "", "", ""],
    directions: "",
  });

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    console.log( value, index)
    const ingredients = formData.ingredients
    ingredients[index] = value
    setFormData({ ...formData, ingredients })
  };

  const handleAddIngredient = (e) => {
    setFormData({ ...formData, ingredients: [...formData.ingredients, ""] });
    // TODO: Function deletes previous inputs and replaces with new input groups
  };

  const handleDeleteIngredient = (ingredient, inputKey) => {
    console.log(ingredient);
    console.log(inputKey);
    const updatedIngredients = formData.ingredients.filter((item,i)=> i !== inputKey)
    setFormData({ ...formData, ingredients: updatedIngredients });
    // TODO: remove ingredient from specified index from formData.ingredients 
  };

  const handleAddRecipe = async (formData) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      await addRecipe({ variables: {title: formData.title, 
        ingredient: formData.ingredient,
        directions: formData.directions } });
      
      addRecipe(formData);
      // upon success, remove book's id from localStorage
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <>
      <div fluid className="text-dark bg-light p-5 mb-4">
        <Container>
          <h1 className='text-center'>Create your Recipe</h1>
        </Container>
      </div>

      <Container>
        <Row>
          <Col>
            <Form className='w-75 mx-auto'>
              <Form.Group className="mb-4" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" onChange={e => setFormData({...formData, title: e.target.value})}/>
              </Form.Group>
              <Form.Label>Ingredients</Form.Label>
              <Inputs formData={formData} handleInputChange={handleInputChange} handleDeleteIngredient={handleDeleteIngredient}/>
              <Button
                variant="secondary"
                className="mb-4 w-100"
                onClick={handleAddIngredient}
              >
                Add Ingredient
              </Button>
              <Form.Group className="mb-4" controlId="directions">
                <Form.Label>Directions</Form.Label>
                <Form.Control as="textarea" rows={5} onChange={e => setFormData({...formData, directions: e.target.value})}/>
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="mb-4 w-100"
                size="lg"
                onSubmit={handleAddRecipe(formData.formData)}
              >
                Create Recipe
                {/* Use submit button to send information to profile page with a card of the given recipe */}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default CreateRecipes;
