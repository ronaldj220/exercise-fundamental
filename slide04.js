// Exercise 1
function createTriangle(height) {
  let counter = 1;
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += (counter < 10 ? "0" : "") + counter + " ";
      counter++;
    }
    console.log(row);
  }
}
createTriangle(5);

// Exercise 2
function FizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = "";
    if (i % 3 === 0) {
      output += "Fizz";
    }
    if (i % 5 === 0) {
      output += "Buzz";
    }
    console.log(output || i);
  }
}
FizzBuzz(6);
// FizzBuzz(30);
// Exercise 3

function calculateBMI(weight, height) {
  let bmi = weight / height ** 2;

  switch (true) {
    case bmi < 18.5:
      return "less weight";
    case bmi >= 18.5 && bmi <= 24.9:
      return "ideal";
    case bmi >= 25.0 && bmi <= 29.9:
      return "overweight";
    case bmi >= 30.0 && bmi <= 39.9:
      return "overweight";
    case bmi > 39.9:
      return "obesity";
  }
}

// Exercise 4

function removeOddNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

// Exercise 5

let splitCloning = (text, separator = " ") => {
  let arr = [];
  let startIndex = 0;
  for (let index = 0; index < text.length; index++) {
    if (text[index] === separator) {
      arr.push(text.slice(startIndex, index));
      startIndex = index + 1;
      if (startIndex < 1) {
        arr.push(text[index]);
      }
    }
  }
  arr.push(text.slice(startIndex));
  return arr;
};
console.log(splitCloning("Hello World", "W"));
console.log("Hello World".split("W"));
