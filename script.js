console.log('Ahmed');
console.log('Electrical and Electronic Engineering');
console.log('Sri Eshwar College of E ngineering');
// // var a = 10;

// console.log( 'the value of a is' +a);

//  var a1=30;

// console.log('the value of a is ' +a);

// a1=50;

// console.log('the value of a is ' +a);

// var b=20;

// console.log('the value of b is ' +b); 
// b=40;

// console.log('the value of b is ' +b);
 
// const pi=3.14;

// console.log('the value of pi is ' +pi);
// //pi=3.15; // we cannot change the value of constant variable
// //console.log('the value of pi is ' +pi);

// let name='Ahmed';
// let Age=22;
// let isStudent=true;
// let x =2.314;

// console.log(typeof name);
// console.log(typeof Age);
// console.log(typeof isStudent);
// console.log(typeof x);

// function greet(){
//     console.log('Hello, welcome to Sri Eshwar College of Engineering');
// }   

// greet();

// function addNumbers(num1, num2){
//    let sum = num1 + num2;
//    console.log('The sum is: ' + sum);

// }

// addNumbers(5, 10);
// addNumbers(20, 30);
// addNumbers(100, 200);

// const greeting=() =>{
// console.log('Hello!');

// };
// greeting();

// const addition=(x,y)=>{

// return x+y;
// };
//  let results=addition(20,40);
//  console.log(results);

let a=[1,2];
a.push(3);
console.log(a);

let b=[1,2,3];
b.pop();
console.log(b);

let c=[2,3];
c.unshift(1);
console.log(c);

let d=[1,2,3];
d.shift();
console.log(d);

let greet2=function() {
console.log('Hi there');
};

greet2();

let greet3=()=>{
    console.log("What's up");
};
greet3();

let names=['Ahmed', 'Suleimain','Masoud'];
console.log(names);

let student={
name:'ahmed',
Age:21,
City:'Delhi'
};
console.log(student);

let arr=[10,20,30,40,50];
for(let i=0;i<=4;i++){
    console.log(arr[i]);
}



// forEach
arr.forEach(value=>{
console.log(value);
});


// forEach
let marks=[50,60,70];
marks.forEach(m=>{
console.log(m);
});

// map
let mark=[90,50,70];
let updated=mark.map(s=>s+10);
console.log(updated);

updated.forEach(q=>{
    console.log(q);
})

// Filter
//print all the value that the condition is passed
let mark2=[67,56,68];
let passed=mark2.filter(mark=>mark>40);
console.log(passed);



//Find
//print only the first element in which the the condition is passed
let mark3=[70,80,67,78];
let dom=mark3.find(mark=>mark>50);
console.log(dom);



















