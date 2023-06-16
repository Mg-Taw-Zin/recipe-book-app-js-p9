const API_KEY = "8e1a4fde71cc448b97f2bd68f9360eb1";
const recipeList = document.querySelector("#recipe-list");

function displayRecipes(recipes) {
  recipeList.innerHTML = "";
  recipes.forEach((recipe) => {
    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");
    recipeImage = document.createElement("img");
    recipeImage.src = recipe.image;
    recipeImage.alt = "recipe Image";
    recipeTitle = document.createElement("h2");
    recipeTitle.innerText = recipe.title;
    recipeIngredient = document.createElement("p");
    recipeIngredient.innerHTML = `<strong>Ingredients:</strong> ${recipe.extendedIngredients
      .map((ingredient) => ingredient.original)
      .join(", ")}`;
    recipeLink = document.createElement("a");
    recipeLink.herf = recipe.sourceUrl;
    recipeLink.innerText = "View Recipe";

    recipeItem.appendChild(recipeImage);
    recipeItem.appendChild(recipeTitle);
    recipeItem.appendChild(recipeIngredient);
    recipeItem.appendChild(recipeLink);
    recipeList.appendChild(recipeItem);
  });
}

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
  );
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
  displayRecipes(recipes);
}
init();
