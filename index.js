// console.log("Hello");
// console.log(1+3);

// // Conditional statement

// let age = 18;
// let name = "Vikas"
// if (age >= 18) {
//     if (name == "Vikas") {    
//     }
//     console.log("You are Eligible!");
//     console.log("Your name is Vikas");
    
// } else {
//     console.log("You are not Eligible!");

// }

// let a = 18;
// let b = 18;

// if (a > b ) {
//     console.log("a is greater");
// } else if(b>a){
//     console.log("b is greater");
// } else {
//     console.log("Both are equal");
// }

// let ch=2;

// switch (ch) {
//     case 1:
//         console.log("i am 1");
//         break;
//     case 2:
//         console.log("i am 2");
//         break;
//     case 3:
//         console.log("i am 3");
//         break;
//     default:
//         console.log("I am a number");
//         break;
// }

// // loops - for , while, do while

// for (let i = 1; i <= 10 ; i++) {
//     console.log(`2 * ${i} = ${2*i}`);
// }

// var i = 1;
// while (i<=10) {
//     console.log(`2 * ${i} = ${2*i}`);
//     i++;
// }

// let i = 1
// do {
//     console.log(`2 * ${i} = ${2*i}`);
//     i++;
// } while (i<= 10);

// var, let, const



// let firstName = "Vikas";
// let lastName = " Kashyap";
// console.log(`${firstName}${lastName}`);

// Datatype
//  1. Primitive datatypes
// let num = 50;
// console.log(typeof num);

// let str = "hello"
// console.log(str);

// let bool = true
// console.log(typeof bool);

// let a = null
// console.log(typeof a);

// let b
// console.log(b);


// result = 5;
// result = String(result)
// console.log(typeof result);

// Operators 

//airthmetic

// console.log(10 + 5);
// console.log(10 - 5);
// console.log(10 * 5);
// console.log(10 / 5);
// console.log(10 % 4);
// console.log(10 ** 4);

// let a = 1;
// a++;
// console.log(a);

//Comparision

// a="5";
// b=6;
// console.log(a===b);
// console.log(a!==b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// Logical

// console.log(4>3 || 3>4);
// console.log(4>3 && 3>4);
// console.log(!true);

// [1, 2, 3].forEach(x => console.log(x));  // 1 2 3

// const result = [3, 1, 2,6,8,2,3,5,4,956,4,4,8,8,56,9,54,8,5,5,6,4,5,9,6,55,4,].reverse();  // [1, 2, 3]
// console.log(result);

// const arr = [1, 2, 3, 4];
// arr.copyWithin(1, 2);  // [1, 3, 4, 4]
// console.log(arr);

// const obj = {a: 1, b: 2};
// console.log(Object.entries(obj));  // [['a', 1], ['b', 2]]

// const target = {a: 1};
// const source = {b: 2};
// Object.assign(target, source);  // target = {a: 1, b: 2}


// const obj = {a: 1};
// Object.freeze(obj);
// obj.a = 2;  // Fails, as obj is frozen

// const str = "hello";
// console.log(str.charCodeAt(1));  // 101 ('e')

// console.log("Hello".concat(" World"));  // 'Hello World'

// console.log("hello".indexOf("l"));  // 2

// console.log("hello".match(/l/g));  // ['l', 'l']

// const matches = "test1 test2".matchAll(/t(e)(st(\d))/g);
// for (const match of matches) {
//   console.log(match);
// }  // Logs match details

// console.log(Math.sqrt(16));  // 4

// console.log(Math.log(2));  // 0

// console.log(Date.now());  // 1696322839283 (current timestamp)

// let date = new Date(Date.now());
// let formattedDate = date.getDate().toString().padStart(2, '0') + '/' + 
//                     (date.getMonth() + 1).toString().padStart(2, '0') + '/' + 
//                     date.getFullYear();
// console.log(formattedDate);  // Outputs: "03/10/2024"



// console.log(date.getMinutes());  // 30

// let set = new Set([1, 2, 3]);
// set.add(4);
// console.log(set);  // Set { 1, 2, 3 }

// let map = new Map([['a', 1], ['b', 2]]);
// console.log(map);  // Map { 'a' => 1, 'b' => 2 }


// let result = confirm("Are you sure?");
// console.log(result);  // true or false

// let name = prompt("Enter your name:");
// console.log(name);  // User's input

// window.focus();  // Brings the current window into focus
// window.print();  // Opens the print dialog for the current page
// window.scrollTo(0, 500);  // Scrolls vertically to 500px

// function greet(name){
//     console.log(`Hello ${name}`);
// }
// greet("Vikas");

let num = [10,25,3,51,16,12]

// for (let i = 0; i < num.length; i++) {
//     console.log (num[i])
// }

// num.forEach((val,index,array) => {
//     console.log(val , index, array);
// });

// function fun(){
//     console.log("I am function 1");
//     function fun2(){
//         console.log("I am function 2");
//     }
//     fun2()
// }
// fun()

// function User(name){
//     if(!new.target){
//         return new User(name)
//     }
//     this.name=name;
// }
// let person =  User("Vikas")
// console.log(person.name);

// var obj1={
//     fName: "Vikas"
// }

// var obj2={
//     lName: "Kashyap"
// }

// obj2.__proto__ = obj1

// console.log(obj2);

// function Person(name,age){
//     let person = Object.create(obj)
//     person.name = name;
//     person.age = age;
//     return person
// }
// var obj = {
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// let user = Person ("Vikas", 25)
// user.greet()
// console.log(user);

//  better way

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello ${this.name}`)
//     }
// }
// let user = new Person ("Vikas", 25)
// user.greet()
// console.log(user);

// setTimeout(() => {
//     console.log("Hello after 2 seconds.");
    
// }, 2000);




//// Callback hell (solving with promises)


function loadingData() {
    console.log("Processing...");
    
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("1. Data is loading..."); 
            resolve()
        }, 2000);
    })
   
}

function CollectingData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("2. Data is collecting...");
            resolve(); 
        }, 3000);
    })
}

function ApprovingData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("3. Data is approving...");
            reject("Error: Not fullfilled"); 
        }, 2000);
    })
}

function Approved() {
    console.log("4. Congratulations! Data is approved.")
}

// loadingData(function () {
//     CollectingData(function () {
//         ApprovingData(function () {
//             Approved(); 
//         });
//     });
// });

// loadingData().then(CollectingData).then(ApprovingData).then(Approved).catch((err)=>{
//     console.log(err); 
// })


// Async await

async function Ex(){
    await loadingData();
    await CollectingData();
    await ApprovingData()
    await Approved()
}
Ex().catch((err)=>{
    console.log(err);
    
})