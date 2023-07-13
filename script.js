var mealForm = document.getElementById("meal-form");
var mealList = document.getElementById("meal-list");
var searchInput = document.getElementById("search-input");

var meals = [];

mealForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var mealName = document.getElementById("meal-name").value;
  var mealDescription = document.getElementById("meal-description").value;

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

searchInput.addEventListener("input", function () {
  var searchTerm = searchInput.value.toLowerCase();
  var filteredMeals = meals.filter(function (meal) {
    return meal.name.toLowerCase().includes(searchTerm);
  });

  displayMeals(filteredMeals);
});

function displayMeals(mealsArray = meals) {
  mealList.innerHTML = "";

  mealsArray.forEach(function (meal) {
    var listItem = document.createElement("li");
    listItem.textContent = meal.name + " - " + meal.description;
    mealList.appendChild(listItem);
  });
}
