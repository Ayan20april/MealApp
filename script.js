/* declared three variable */
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const mealDetailsDiv = document.getElementById("mealDetails");

/* added click event listener to this variable, when button is clicked */
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.trim();
  
  /* we check if this variable is not empty string */
  if (searchTerm !== "") {
    searchForMeal(searchTerm);
  }
});

/* this function takes a mealName as a argument and */
/* also use template literals to construct the API URL with the mealName */
function searchForMeal(mealName) {
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;

  /* this fetch api to make a GET request to the specified URL */
  fetch(apiUrl)
    /* respone converted to json */
    /* then and catch methods to handle the response data or any errors that may occur during the API request */
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        displayMealDetails(data.meals[0]);
      } else {
        mealDetailsDiv.textContent = "Meal not found.";
      }
    })
    .catch((error) => {
      mealDetailsDiv.textContent = "Error fetching data.";
      console.error(error);
    });
}

/* this function takes a meal object as an argument */
/* its properties to get the relevant meal details.*/
function displayMealDetails(meal) {
  const { strMeal, strCategory, strArea, strInstructions, strMealThumb } = meal;
  
  const mealDetailsHTML = `
    <h2>${strMeal}</h2>
    <p><strong>Category:</strong> ${strCategory}</p>
    <p><strong>Area:</strong> ${strArea}</p>
    <p><strong>Instructions:</strong> ${strInstructions}</p>
    <img src="${strMealThumb}" alt="${strMeal}">
  `;
  
  /* The mealDetailsHTML is then set as the innerHTML of the mealDetailsDiv */
  /* effectively displaying the meal details on the page */
  mealDetailsDiv.innerHTML = mealDetailsHTML;
}
