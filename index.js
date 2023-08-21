var numbers = [11, 21, 45, 17, 105, 6];

// get element by index

console.log(numbers);

console.log(numbers[2]);

// 1. get element value by index

var element = numbers[1];

console.log(element);

// 2. set element value by index
numbers[1] = 22;
console.log(numbers);

//3.find index of an element

var positionIndex = numbers.indexOf(6);
console.log(positionIndex);