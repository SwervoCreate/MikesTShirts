let forSale = [];
const shoppingPanel = document.getElementById("shoppingPanel");
const displayContainer = document.getElementById("displayContainer");



const newItem = (sku) => {
  sku = prompt("Insert SKU #");
  return sku;
}


const postSale = (arr) => {
  arr = forSale;
  let l = forSale.length;
  for (let i = 0; i < l; i++) {
    let newDiv = document.createElement("div");
    newDiv.id = `div${i}`;
    newDiv.innerHTML = `<h1>${forSale[i]}</h1>`;
    
  }
}