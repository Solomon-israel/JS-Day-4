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
  return products.reduce((sum, product) => sum + product.price, 0);
}
// console.log(getInStockProducts());
// console.log(getProductNames());
// console.log(findproductById(2));
// console.log(getTotalCatalogValue());

// TASK FOUR STUDENTS RECORD
const students = [
  { id: 1, name: "israel", score: 98, subject: "Computer programming" },
  { id: 2, name: "mubarak", score: 80, subject: "physics" },
  { id: 3, name: "fatie", score: 84, subject: "Biology" },
  { id: 4, name: "temi", score: 83, subject: "English" },
  { id: 5, name: "bimpe", score: 85, subject: "Thermodynamics" },
  { id: 6, name: "shindara", score: 70, subject: "Chemistry" },
];

function getPassingStudents() {
  const passMark = 50;
  return students.filter((student) => student.score >= passMark);
}

function getAverageScore() {
  const totalScore = students.reduce((sum, student) => sum + student.score, 0);
  const averageScore = totalScore / students.length;
  return averageScore;
}
// console.log(getPassingStudents());
// console.log(getAverageScore());
