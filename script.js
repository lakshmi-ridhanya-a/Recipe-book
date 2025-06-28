document.addEventListener('DOMContentLoaded', function () {
  const openFormButton = document.getElementById("openForm");
  const modal = document.getElementById("recipeFormModal");
  const closeButton = document.querySelector(".close-button");
  const recipeForm = document.getElementById("recipeForm");
  const recipesContainer = document.getElementById("recipesContainer");
  const searchInput = document.getElementById("searchInput");
  const recipeDetailModal = document.getElementById("recipeDetailModal");
  const recipeDetailContent = document.getElementById("recipeDetailContent");

  let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

  function saveRecipes() {
    localStorage.setItem("recipes", JSON.stringify(recipes));
  }

  function renderRecipes(list) {
    recipesContainer.innerHTML = "";
    list.forEach((recipe) => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <h3>${recipe.name}</h3>
      `;
      card.addEventListener("click", () => showRecipeDetail(recipe));
      recipesContainer.appendChild(card);
    });
  }

  function showRecipeDetail(recipe) {
    recipeDetailContent.innerHTML = `
      <span class="close-detail">&times;</span>
      <h2>${recipe.name}</h2>
      <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; height: auto; border-radius: 1rem;">
      <h3>Ingredients:</h3>
      <p>${recipe.ingredients}</p>
      <h3>Preparation:</h3>
<ul>
  ${recipe.steps
    .split('\n')
    .map(step => `<li>${step.trim()}</li>`)
    .join('')}
</ul>

      <button id="backToMain">Close</button>
    `;
    recipeDetailModal.classList.add("show");
    document.body.classList.add("modal-open");

    // Close buttons
    document.querySelector(".close-detail").onclick = closeDetail;
    document.getElementById("backToMain").onclick = closeDetail;
  }

  function closeDetail() {
    recipeDetailModal.classList.remove("show");
    document.body.classList.remove("modal-open");
  }

  recipeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("recipeName").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim();
    const steps = document.getElementById("steps").value.trim();
    const imageInput = document.getElementById("recipeImage").files[0];

    if (!name || !ingredients || !steps || !imageInput) {
      alert("Please fill out all fields.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = function () {
      const newRecipe = { name, ingredients, steps, image: reader.result };
      recipes.push(newRecipe);
      saveRecipes();
      renderRecipes(recipes);
      modal.classList.remove("show");
      recipeForm.reset();
    };

    reader.readAsDataURL(imageInput);
  });

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = recipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.ingredients.toLowerCase().includes(query)
    );
    renderRecipes(filtered);
  });

  openFormButton.onclick = () => modal.classList.add("show");
  closeButton.onclick = () => modal.classList.remove("show");

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
    if (event.target === recipeDetailModal) {
      closeDetail();
    }
  };

  renderRecipes(recipes);
});
