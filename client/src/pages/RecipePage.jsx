import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { getSingleRecipe } from '../utils/API';
import { Container, Col, Card, Row } from 'react-bootstrap';

const RecipePage = () => {
  const { id: recipeId } = useParams();
  const [recipeData, setRecipeData] = useState(null);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const response = await getSingleRecipe(recipeId);

        if (!response.ok) {
          console.error('Error Response:', await response.text());
          throw new Error('Failed to fetch recipe data');
        }

        const data = await response.json();
        setRecipeData(data);
        console.log('Data:', data);

      } catch (error) {
        console.error('Catch block error:', error);
      }
    };

    fetchRecipeData();
  }, [recipeId]);

  return (
    <div>
      <Container>
        <Col md={8} className='mx-auto'>
          {recipeData && (
            <Card className=' my-4'>
              <Row>
                <Col md={6}>
                  <Card.Body>
                    <Card.Title className='text-center'>{recipeData.title}</Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: recipeData.summary}}></Card.Text>
                  </Card.Body>
                </Col>
                <Col md={6}>
                  <Card.Img src={recipeData.image} alt={recipeData.title} />
                </Col>
              </Row>
            </Card>
          )}
          
          {recipeData && recipeData.extendedIngredients && (
            <Card className='px-4 py-2 my-4'>
              <Card.Title className='text-center py-2'>Ingredients</Card.Title>
              <ul>
                {recipeData.extendedIngredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.original}</li>
                ))}
              </ul>
            </Card>
          )}

          {recipeData && recipeData.analyzedInstructions && (
            <Card className='px-4 py-2 my-4'>
              <Card.Title className='text-center py-2'>Instructions</Card.Title>
              <ul>
                {recipeData.analyzedInstructions[0]?.steps.map((step, index) => (
                  <li key={index}>{step.step}</li>
                ))}
              </ul>
            </Card>
          )}
        </Col>
      </Container>
    </div>
  );
};

export default RecipePage;
