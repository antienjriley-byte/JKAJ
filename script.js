function addRecipe() {
  var name = document.getElementById("recipeName").value;
  var ingredients = document.getElementById("recipeIngredients").value;
  var steps = document.getElementById("recipeSteps").value;

  if (name === "" || ingredients === "" || steps === "") {
    alert("Please fill out all fields.");
    return;
  }

  var newRecipe = `
    <div class="recipe-card">
      <h3>${name}</h3>
      <p><strong>Ingredients:</strong> ${ingredients}</p>
      <p><strong>Steps:</strong> ${steps}</p>
    </div>
  `;

  document.getElementById("recipeList").innerHTML += newRecipe;

  document.getElementById("recipeName").value = "";
  document.getElementById("recipeIngredients").value = "";
  document.getElementById("recipeSteps").value = "";
}
