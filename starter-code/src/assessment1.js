// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0){
    return true;
  }
  else{
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a,b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let total=0;
  for (let i=0; i<numbers.length; i++){
    total += numbers[i];
  
  }
  return total;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let max=0;
  if (numbers.length !==0){
    for (let i=0; i<numbers.length; i++){
      if(numbers[i]>max){
        max=numbers[i];
      }
    }
  }
  return max;
}

// Return the longest string in an array
function longestString(strings) {
  let longest="";
  for (let i=0; i<strings.length; i++){
    if (strings[i].length>longest.length){
      longest=strings[i];
    }
  }
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for(let i=0; i<wordsArr.length; i++){
    if (wordsArr[i]==word){
      return true;
    }     
  }
  return false;
}

// Finding the first non-duplicate (non-repeating) word in an array
//function findUnique(wordsArr) {}
 

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
   return personObj.firstName + " "+ personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let max=0;
  for(let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix[i].length; j++){
      if (matrix[i][j]>max){
        max=matrix[i][j];
      }
    }
  }
  return max;
}
