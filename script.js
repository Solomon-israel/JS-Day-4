// TASK ONE OBJECTS MODELLING A SINGLE THING
const product = {
  id: 1,
  name: "Wireless Mouse",
  price: 12000,
  category: "Accessories",
  inStock: true,
};

function formatProduct(name, price, inStock) {
  const join = "".concat(name, " ", price, " ", inStock);
  console.log(join);
}
// console.log(formatProduct("israel", 1000, true));

// TASK TWO ( ARRAYS OF OBJECTS OF TWO, MODELLING A LISTS OF 'THINGS')
const products = [
  { id: 1, name: "shoe", price: 1000, inStock: true },
  { id: 2, name: "bag", price: 700, inStock: false },
  { id: 3, name: "wrist watch", price: 5000, inStock: true },
  { id: 4, name: "razor", price: 200, inStock: false },
  { id: 5, name: "pen", price: 100, inStock: true },
  { id: 6, name: "glasses", price: 900, inStock: false },
];

// TASK THREE PRODUCT CATALOG UTILITIES
function getInStockProducts() {
  return products.filter((product) => product.inStock === true);
}

function getProductNames() {
  return products.map((product) => product.name);
}

function findproductById(id) {
  return products.find((product) => product.id === id);
}

function getTotalCatalogValue() {
  return products.reduce((sum, product) => sum + product.price,0);
}
// console.log(getInStockProducts());
// console.log(getProductNames());
// console.log(findproductById(2));
console.log(getTotalCatalogValue());
