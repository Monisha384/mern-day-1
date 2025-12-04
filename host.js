/* console.log(x);
var x = 10; 
let x=20; */
/* function test() {
    if(1) {
        var count = 5;
    }
    console.log(count);
}
test(); */
/* function test() {
    if(1) {
        let count = 5;
    }
    console.log(count);
}
test(); */
/* function greet() {
    console.log("Hello, welcome to the JavaScript world!");
}
greet();

sayHello();
function sayHello() {
    console.log("This is a function declaration.");
}

const sayHi = function() {
    console.log("This is a function expression.");
};
sayHi(); 

   const greetnamed = function greeting() {
    console.log("Hello from the named function expression!");
};
greetnamed();

function process(callback) {
    console.log("Processing...");
    callback();    //calling the callback function
}
function done() {
    console.log("Task completed!");
}
process(done);  // Passing function as argument

 function higherorder(func){
    console.log(" calling the passed function");
    func();    // Calling the passed function
 }
 function sampleFunction(){
    console.log("Inside the sample function");
 }
    higherorder(sampleFunction);

// normal Function
function greetNormal(name) {
    return "hello " + name;
};
 
//Arrow Function
const greetArrow = (name) => {
    return "hello " + name;
};
console.log(greetArrow("Alice"));
console.log(greetArrow("Bob"));

const add = (a, b) => a + b;
console.log(add(5, 3)); // Outputs: 8

const square = x => x * x;
console.log(square(4)); // Outputs: 16
 */
//array  //push
/* const fruits = ["apple", "banana", "cherry"];
const newLength = fruits.push("date"); // Adds "date" to the end
console.log(fruits);
console.log(newLength); // Outputs: 4

 //unshift
const numbers = ['1', '2', '3', '4', '5'];
const NewLength = numbers.unshift('0'); // Adds 0 to the beginning
console.log(numbers);
console.log(NewLength); // Outputs: 6

//pop
const veggies = ["carrot", "broccoli", "spinach"];
const Length = veggies.pop();
console.log(veggies); // Outputs: ["carrot", "broccoli"]
console.log(Length); // Outputs: 2

 //slice
 let letters = ['a', 'b', 'c', 'd', 'e'];
 let newLetters = letters.slice(1, 4); // Extracts from index 1 to 3
 console.log(letters);
 console.log(newLetters);
 let lastTwo = letters.slice(-2);
 console.log(lastTwo); 

 //splice
 let colors = ['red', 'green', 'blue', 'yellow'];
 let removedColors = colors.splice(1, 2,);  //remove 2 elements from index 1 
 console.log(colors);         // Outputs: ['red', 'yellow']
 console.log(removedColors);   // Outputs: ['green', 'blue']
 colors.splice(2, 0, 'pink');    //add 'pink' at index 2 without removing any element
 console.log(colors);        // Outputs: ['red', 'yellow', 'pink']

 //includes
 const numbers1 = [1, 2, 3, 4, 5];
    console.log(numbers1.includes(3)); // Outputs: true
    console.log(numbers1.includes(6)); // Outputs: false

//find
    let numbers2 = [1, 2, 3, 4, 5];
    let found =numbers2.find(num=> num > 3);  // Finds the first number greater than 3
    console.log(found); // Outputs: 4

let nums = [3,5,7,8,9,10];
let evenNum = nums.find(num => num % 2 === 0);
console.log(evenNum); // Outputs: 8

let names=["Raj","Abi","Mahesh","Kumar"];
let longName = names.find(name => name.length > 4);
console.log(longName); // Outputs: "Mahesh"

//map
let original = [1, 2, 3, 4];
let doubled = original.map(num => num * 2);   // Creates a new array with each number doubled
console.log(original);             // Outputs: [1, 2, 3, 4]
console.log(doubled);             // Outputs: [2, 4, 6, 8]

let numbers3 = [1, 2, 3, 4, 5];
let f= numbers3.map(num => num >3);
console.log(f);  // Outputs: [false, false, false, true, true]

let prices=[200,350];
let text = prices.map(price => price + 100);
console.log(text); // Outputs: [300, 450]

let persons=["Kumar","Vijay","Sasi"];
let p=persons.map(name=>"Mr." + name);
console.log(p); // Outputs: ["Mr. Kumar", "Mr. Vijay", "Mr. Sasi"]

//filter
let values = [10, 15, 20, 25, 30];
let filtered = values.filter(num => num > 20);
console.log(filtered); // Outputs: [25, 30]

let marks=[30,60,70,80,90,95];
let passed = marks.filter(mark => mark >= 80);
console.log(passed); // Outputs: [80, 90, 95]

 let students = [
    { name: "Moni", age: 20,grade:"A" },
    { name: "Soundar", age: 25,grade:"B" },
    { name: "Nithar", age: 22,grade:"A+" }
];
let name = students.map(student => student.name);
console.log(name); // Outputs: ["Moni", "Soundar", "Nithar"]

let score=[85,92,78,88,95,30,40];
let passedMarks = score.filter(mark => mark >= 35);
let grades = passedMarks.map(mark => 'Grade: ' + (mark >= 90 ? 'A' : mark >= 75 ? 'B' : mark >= 50 ? 'C' : 'D'));
console.log(passedMarks); // Outputs: [85, 92, 78, 88, 95]
console.log(grades); // Outputs: ["Grade: B", "Grade: A", "Grade: B", "Grade: A", "Grade: A"] */

/* let students = [
    { name: "nathi", mark: 85 },
    { name: "mouli", mark: 92 },
    { name: "shivu", mark: 40 },
];
let names=students.filter(student => student.mark >= 50).map(student => student.name);
console.log(names); // Outputs: ["nathi", "mouli"] */

//loop 
        //for in
const person={
    name:"Moni",
    age:19,
    city:"Chennai" , 
};
for(let key in person){
console.log(key,person[key]);
}
//for of
const colors1=["red","green","blue"];
for(let  f of colors1){
    console.log(f);
} 

//forEach
let names=["Moni","Sharmi","Nathi"];
names.forEach(n=> {
    console.log("Hello "+ n);  
});

//reduce
let nums=[10,20,30,40,50];
let total=nums.reduce((sum,current) => sum + current,0);
console.log(total); // Outputs: 150

//concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // Outputs: [1, 2, 3, 4, 5, 6]

//spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const Merged = [...array1, ...array2];
console.log(Merged); // Outputs: [1, 2, 3, 4, 5, 6]