const categoryElements = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoryElements.length}`);

categoryElements.forEach((item) => {
  const itemsInCategory = item.querySelectorAll("ul li");
  const categoryTitle = item.querySelector("h2");
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${itemsInCategory.length}`);
});
