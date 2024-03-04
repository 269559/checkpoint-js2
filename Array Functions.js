//Function 1 :

// Function to find the maximum value in an array
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  let max = arr[0]; 

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Function to find the minimum value in an array
function findMin(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  let min = arr[0]; 
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i]; 
    }
  }

  return min;
}

//Function 2:
function sumArray(arr) {
  return arr.reduce(function (sum, current) {
    return sum + current;
  },
   0);
}

//Function 3:
function filterArray(arr, condition) {
  let filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }

  return filteredArray;
}
