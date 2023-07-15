var mealForm = document.getElementById("meal-form");
var mealList = document.getElementById("meal-list");
var searchInput = document.getElementById("search-input");

/* this array for store the meals */
var meals = [];

/* added event listener to this form, which triggers a function when the form is submitted */
mealForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var mealName = document.getElementById("meal-name").value;
  var mealDescription = document.getElementById("meal-description").value;

  /* here is the values of the meal name and description inputs, creates a meal object added it to meals app */
  /* then call displayMeals */
  if (mealName.trim() !== "") {
    var meal = {
      name: mealName,
      description: mealDescription,
    };

    meals.push(meal);
    displayMeals();
    mealForm.reset();
  }
});

/* event listener is added this input for which triggers a function whenever the input value changes */
searchInput.addEventListener("input", function () {
  var searchTerm = searchInput.value.toLowerCase();
  /* search function filters the meals array based on the entered search term */
  var filteredMeals = meals.filter(function (meal) {
    return meal.name.toLowerCase().includes(searchTerm);
  };

  /* calls this function with the filtered array */
  displayMeals(filteredMeals);
});

/* this function takes an optional array argument and clears the meal list */
/* it iterates over the array, creates list items for each meal and appends them to the meal list */
function displayMeals(mealsArray = meals) {
  mealList.innerHTML = "";

  mealsArray.forEach(function (meal) {
    var listItem = document.createElement("li");
    listItem.textContent = meal.name + " - " + meal.description;
    mealList.appendChild(listItem);
  });
}
