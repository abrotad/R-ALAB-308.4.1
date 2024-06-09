// Step 1: Create a variable called "csv" for the string data
let csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Step 2: Split the string data at \n and convert it into an array
let newArray = csv.split("\n");
console.log(newArray);

// Step 3: Create a variable called dataArray, set to an empty array
let dataArray = [];

// Loop through newArray and split each item, then push each item into dataArray
for (let i = 0; i < newArray.length; i++) {
  dataArray.push(newArray[i].split(","));
}

console.log(dataArray);

// Step 4: Extract ["ID", "Name", "Occupation", "Age"] from dataArray
let cellHeaders = [];

// Loop through the first array element of dataArray
for (let i = 0; i < dataArray[0].length; i++) {
  cellHeaders.push(dataArray[0][i].toLowerCase());
}

console.log(cellHeaders);

// Step 5: Create a new empty array named objectArray

let objectArray = [];

// Loop through rows
for (let i = 1; i < dataArray.length; i++) {
  let row = dataArray[i];
  let object = {};

  // Loop through cell headers
  for (let j = 0; j < row.length; j++) {
    object[cellHeaders[j]] = row[j];
  }

  objectArray.push(object);
}

console.log(objectArray);
