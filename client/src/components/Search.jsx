import React, { useEffect, useState } from "react";

function SearchRecipe() {
  const [mealData, setMealData] = useState("");

  function GetRecipeData() {
    let ApiKey = process.env.REACT_APP_API_KEY;
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${ApiKey}&includeNutrition=false$query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch((error) => {
        console.log(error);
      });
    useEffect(() => {
        GetRecipeData();
    }, []);
  }
  return (
    <>
        <h1>Test</h1>
    </>
  )
}