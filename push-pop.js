var numbers = [78, 45, 98, 45];
// use push to add element to an array as the last element array
numbers.push(6);
console.log(numbers);

var friends = ['mariha', 'humayra', 'hasna'];
friends.push('habib');
friends.push('hasan');
// use pop to get last element
friends.pop();


// advance no need
var humayra = friends.pop();

console.log(humayra);

var moly = ['mariha', 'humayra', 'hasna'];

moly.push('doctor');
moly.unshift('engineer');
moly.splice(2,0,  'habib');

console.log(moly);