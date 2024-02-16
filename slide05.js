/**
 * 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
 */

// Using Sort Function
const sortArray = (array) => {
  const sortedArr = array.slice().sort((a, b) => a - b);
  const min = sortedArr[0];
  const max = sortedArr[sortedArr.length - 1];
  let sum = 0;
  for (const num of sortedArr) {
    sum += num;
  }
  const average = sum / array.length;
  return { lowest: min, highest: max, average };
};
console.log(sortArray([12, 5, 23, 18, 4, 45, 32]));

// Without using Sort Function

const sortArrayWithoutSortFn = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let sum = arr[0];
  for (let index = 1; index < arr.length; index++) {
    // task
    const num = arr[index];
    sum += num;
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  }
  const average = sum / arr.length;
  return { lowest: min, highest: max, average };
};

console.log(sortArrayWithoutSortFn([12, 5, 23, 18, 4, 45, 32]));

/**
 * 2. Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.
 */

const concatenateWords = (words) => {
  if (words.length === 0) {
    return "";
  } else if (words.length === 1) {
    return words[0];
  } else {
    const kata = words.slice(0, -1).join(", ");
    const kataTerakhir = words[words.length - 1];
    return `${kata} and ${kataTerakhir}`;
  }
};

console.log(concatenateWords(["apple", "banana", "cherry", "date"]));

/**
 * 3. Write a function to split a string and convert it into an array of words
 */

const splitCloning = (text, separator = " ") => {
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

console.log(splitCloning("Hello World"));

/**
 * 4. Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.
 */

const calculateArr = (array1, array2) => {
  let hasil = [];
  let minLength = Math.min(array1.length, array2.length);
  for (let index = 0; index < minLength; index++) {
    hasil.push(array1[index] + array2[index]);
  }
  return hasil;
};
console.log(calculateArr([1, 2, 3, 4], [3, 2, 1]));

/**
 * 5. Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array.
 */

const addUniqueElement = (arr, e) => {
  let isUnique = true;
  for (let index = 0; index < arr.length; index++) {
    // task
    if (arr[index] === e) {
      isUnique = false;
      break;
    }
  }
  if (isUnique) {
    arr.push(e);
  }
  return arr;
};

console.log(addUniqueElement([1, 2, 3, 4], 4));
console.log(addUniqueElement([1, 2, 3, 4], 7));
