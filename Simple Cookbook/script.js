function addIngredient() {
    var ingredientInput = document.getElementById("ingredient-input");
    var ingredientList = document.getElementById("ingredient-list");
  
    if (ingredientInput.value !== "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(ingredientInput.value));
      ingredientList.appendChild(li);
      ingredientInput.value = "";
    }
  }
  
  function addInstruction() {
    var instructionInput = document.getElementById("instruction-input");
    var instructionList = document.getElementById("instruction-list");
  
    if (instructionInput.value !== "") {
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(instructionInput.value));
      instructionList.appendChild(li);
      instructionInput.value = "";
    }
  }
  
  function saveRecipe() {
    var recipeTitle = document.getElementById("recipe-title").value;
    var savedRecipes = document.getElementById("saved-recipes");
  
    if (recipeTitle !== "") {
      var li = document.createElement("li");
      var link = document.createElement("a");
      link.setAttribute("href", "#");
      link.appendChild(document.createTextNode(recipeTitle));
      link.addEventListener("click", function() {
        displayRecipeDetails(recipeTitle);
      });
      li.appendChild(link);
      savedRecipes.appendChild(li);
      clearForm();
    }
  }
  
  function displayRecipeDetails(title) {
    var detailsTitle = document.getElementById("details-title");
    var detailsIngredients = document.getElementById("details-ingredients");
    var detailsInstructions = document.getElementById("details-instructions");
    var recipeDetails = document.getElementById("recipe-details");
  
    detailsTitle.textContent = title;
    detailsIngredients.innerHTML = "";
    detailsInstructions.innerHTML = "";
  
    var ingredientList = document.getElementById("ingredient-list").children;
    for (var i = 0; i < ingredientList.length; i++) {
      var li = document.createElement("li");
      li.textContent = ingredientList[i].textContent;
      detailsIngredients.appendChild(li);
    }
  
    var instructionList = document.getElementById("instruction-list").children;
    for (var j = 0; j < instructionList.length; j++) {
      var li = document.createElement("li");
      li.textContent = instructionList[j].textContent;
      detailsInstructions.appendChild(li);
    }
  
    recipeDetails.style.display = "block";
  }
  
  function clearForm() {
    document.getElementById("recipe-title").value = "";
    document.getElementById("ingredient-input").value = "";
    document.getElementById("ingredient-list").innerHTML = "";
    document.getElementById("instruction-input").value = "";
    document.getElementById("instruction-list").innerHTML = "";
  }
  
  