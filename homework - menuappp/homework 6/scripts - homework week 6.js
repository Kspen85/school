//*question 1
//*a subtract first from last
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
let lastAge = ages[ages.length-1];
let firstAge = ages[0];
let result = (lastAge - firstAge);
console.log(ages);
console.log('The first value subtracted from the last is ',result);
//b done - subtract first from last again
ages.push(22);
console.log('22 added to the array ',ages);
console.log('The new result is ',ages[ages.length - 1] - ages[0]);
//c look to calculate average age
let averageAge = 0;
let ageCount = 0;
for (let i = 0; i < ages.length; i++) {
    averageAge += ages[i];
    ageCount++;
}
let average = averageAge / ageCount;
console.log('The average age is ',average);
//question 2 A
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log ('The average letters per name is ',averageLetters);
//B
listOfNames = [];
for (let i = 0; i< names.length; i++) {
    listOfNames += names[i] + " ";
} 
console.log('The Concatenated names are: ',listOfNames);
//3
console.log('Access the last element of an array: arr.length - 1');
//4
console.log('Access the first element of an array: arr[0]');
//5
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
console.log('The length of each name is: ',nameLengths); 
//6
let sumNamesLength = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumNamesLength += nameLengths[i];
}
console.log('The total sum equals: ',sumNamesLength);
//7
function repeatHello(word, n) {
        return word.repeat(n);
    }
let sayHello = repeatHello('Hello ', 3);
console.log(sayHello);
//8
function createFullName(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    return fullName;
}
let firstName = 'John';
let lastName = 'Smith';
let fullName = createFullName(firstName, lastName);
console.log(fullName); 
//9
function greaterThanHundred(numbers) {
    for (let i = 0; i < x; i++) {
        console.log(i);
    }
    return sum > 100;
}
//10 
const averageNumber = array => array.reduce((a, b) => a + b) / array.length;
console.log(averageNumber([15,27,38,43,52]));
//11


//12
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
