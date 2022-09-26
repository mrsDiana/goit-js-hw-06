const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let newIngredients = [];
for(const ingridient of ingredients) {
  let newIngredient = document.createElement("li");
  newIngredient.textContent = `${ingridient}`;
  newIngredient.classList.add("item");
  newIngredients.push(newIngredient);
}

const listIngredients= document.querySelector("#ingredients");
listIngredients.append(...newIngredients);


