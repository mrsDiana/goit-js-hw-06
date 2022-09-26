const arrayOfCategories = document.querySelector("#categories").children;

console.log(`Number of categories: ${arrayOfCategories.length}`);
for (const category of arrayOfCategories) {
    console.log(`Category: ${category.querySelector("h2").textContent}`);
    console.log(`Elements: ${category.querySelector("ul").children.length}`);
}
