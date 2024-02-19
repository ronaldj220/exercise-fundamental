// Exercuse 01
class Student {
  constructor(name, email, birth, score) {
    this.name = name;
    this.email = email;
    this.age = new Date().getFullYear() - new Date(birth).getFullYear();
    this.score = score;
  }
}

let dbStudent = [
  new Student("Edo", "edo@mail.com", "1997-04-25", 32),
  new Student("Andrew", "and@mail.com", "1998-11-12", 65),
  new Student("Zafran", "zaf@mail.com", "1992-02-01", 95),
  new Student("Budi", "budi@mail.com", "1996-11-11", 75),
];

let calculateStudent = (arr) => {
  // Perhitungan Skor
  let sortedbyArray = arr.slice().sort((a, b) => a.score - b.score);
  let minValue = sortedbyArray[0];
  let maxValue = sortedbyArray[arr.length - 1];
  let averageScore =
    arr.reduce((sum, array) => sum + array.score, 0) / arr.length;

  let score = { highest: maxValue, lowest: minValue, average: averageScore };

  // Perhitungan Umur
  let sortedUmurbyArray = arr.slice().sort((a, b) => a.age - b.age);
  let minUmur = sortedUmurbyArray[0];
  let maxUmur = sortedUmurbyArray[arr.length - 1];
  let averageUmur =
    arr.reduce((sum, student) => sum + student.age, 0) / arr.length;
  let age = { highest: maxUmur, lowest: minUmur, average: averageUmur };

  return { score, age };
};
console.log(calculateStudent(dbStudent));

// Exercise 02

class Product {
  constructor(name, price, qty = 0) {
    this.name = name;
    this.price = price;
    this.qty = qty;
  }

  showQty() {
    return this.qty;
  }

  // Metode untuk menghitung total harga produk
  getTotal() {
    return this.price * this.qty;
  }
}

let dbProduct = [new Product("Apel", 5000), new Product("Lemon", 10000)];

class Transaction {
  constructor() {
    this.total = 0;
    this.products = [];
    this.qty = 0;
    this.price = 0;
  }

  addToCart(product, qty) {
    this.products.push({ product, qty });
    this.total += product.price * qty;
    this.qty += qty;
    product.qty += qty;
  }

  cart() {
    return this.products.map((item) => ({
      product: item.product,
      total: this.total,
    }));
  }

  showTotal() {
    return this.total;
  }

  checkout() {
    const transactionData = {
      total: this.total,
      products: this.products,
      qty: this.qty,
    };
    return transactionData;
  }
}

let transaction = new Transaction();
transaction.addToCart(dbProduct[0], 3);
console.log(transaction.cart());
