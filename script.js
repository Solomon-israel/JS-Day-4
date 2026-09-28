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
  { id: 3, name: "fatie", score: 78, subject: "Biology" },
  { id: 4, name: "temi", score: 61, subject: "English" },
  { id: 5, name: "bimpe", score: 48, subject: "Thermodynamics" },
  { id: 6, name: "shindara", score: 19, subject: "Chemistry" },
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

function getTopStudent() {
  return students.reduce((highest, student) =>
    student.score > highest.score ? student : highest,
  );
}

function assignGrade() {
  return students.map((student) => {
    if (student.score <= 30) {
      console.log("F");
    } else if (student.score >= 31 && student.score <= 50) {
      console.log("D");
    } else if (student.score >= 51 && student.score <= 60) {
      console.log("C");
    } else if (student.score >= 61 && student.score >= 78) {
      console.log("B");
    } else {
      console.log("A");
    }
  });
}
// console.log(getPassingStudents());
// console.log(getAverageScore());
// console.log(getTopStudent());
// console.log(assignGrade());

// TASK FIVE TRANSACTION ANALYZER
const transactions = [
  { id: 1, type: "credit", amount: 2500, date: "28/12/15" },
  { id: 2, type: "debit", amount: 1100, date: "22/10/03" },
  { id: 3, type: "credit", amount: 1030, date: "01/12/18" },
  { id: 4, type: "credit", amount: 2010, date: "18/03/15" },
  { id: 5, type: "debit", amount: 9000, date: "30/06/01" },
  { id: 6, type: "debit", amount: 5000, date: "13/02/05" },
  { id: 7, type: "credit", amount: 80000, date: "03/11/12" },
  { id: 8, type: "debit", amount: 30, date: "17/08/14" },
  { id: 9, type: "credit", amount: 3700, date: "10/14/16" },
  { id: 10, type: "debit", amount: 650, date: "06/086" },
];

// const allCredits = transactions.reduce(
//   (sum, transaction) => sum + transaction.amount,
//   0,
// );
// console.log(allCredits);
function allCredits() {
  return transactions.reduce((credit, transaction) => {
    if (transaction.type === "credit") {
      return credit + transaction.amount;
    }
    return credit;
  }, 0);
}
function allDebits() {
  return transactions.reduce((debit, transaction) => {
    if (transaction.type === "debit") {
      return debit + transaction.amount;
    }
    return debit;
  }, 0);
}

function getBalance() {
  return allCredits() / allDebits();
}

function getTransactionByType() {
  return transactions.filter((transaction) => transaction.type === "credit");
}

function getTransactionByTypeDebit() {
  return transactions.filter((transaction) => transaction.type === "debit");
}

function getLargestTransaction() {
  return transactions.reduce((largest, transaction) =>
    transaction.amount > largest.amount ? transaction : largest,
  );
}
// console.log(allCredits());
// console.log(allDebits());
// console.log(getBalance());
// console.log(getTransactionByType());
// console.log(getTransactionByTypeDebit());
console.log(getLargestTransaction());
