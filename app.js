var forSale = [];
var container = document.getElementById('shoppingPanel');
var fName = document.getElementById(fName);
const submit = document.getElementById("menuBtn");




const newItem = (sku) => {
  sku = prompt("Insert SKU #");
  forSale.push(sku);
  return forSale;
}
var l = forSale.length;

function displayNewItems() {
  forSale.forEach(function(forSale) {
    container.innerHTML += '<div class="items"></div>';
});
}

submit.addEventListener("click", function() {
  const sidebar = document.getElementsByClassName("sidebar");
   const container = document.getElementById("sidebarContainer");
  const close = document.getElementById("closeBtn");
  const sideItems = document.querySelector("#sidebarContainer div");
  let l = sidebar.length;
  for (let i = 0; i < l; i++) {
    sidebar[i].style.display = "inline";
    container.style.display = "grid";
    container.style.gridTemplateColumns = "5vw";
    container.style.gridTemplateRows = "5vh 5vh 5vh 5vh 5vh 10vh";
    container.style.height = "60vh";
    container.style.width = "20vw";
    submit.style.display = "none";
    close.style.display = "inline";
  }
});
const close = document.getElementById("closeBtn");
close.addEventListener("click", function() {
  let container = document.getElementById("sidebarContainer");
  container.style.height = "0";
  container.style.width = "0";
  container.style.display = "none";
  submit.style.display = "inline";
  close.style.display = "none";
})


