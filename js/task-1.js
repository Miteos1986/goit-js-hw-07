const listEl = document.querySelector("#categories");
let itemList = document.querySelectorAll(".item")
console.log(`Number of categories: ${itemList.length}`);
itemList.forEach(element => {
    categoryInfo(element)
});
function categoryInfo(categories) {
    let categoryTitle = categories.querySelector("h2").textContent;
    let elements = categories.querySelectorAll("li").length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${elements}`);
}
