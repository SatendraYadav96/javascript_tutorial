//    1. ways to print in Javascript
/* console.log("Hello world");
    alert("me");
    document.write("this is document write") */

// 2. Javascript console API
/* console.log("hello world", 4+6, "Another log");
    console.warn("this is warning");
    console.error("this is an error"); */

// 3. Javascript variables
// var num1 = 34;
// var num2 = 56;
// console.log(num1+num2);

// 4) data types in javascript
// Numbers
// var num1 = 47;
// var num2 = 15;
// console.log(num1 - num2);

//  Strings
// var str1 = "satya";
// var str2 ="this is a string";
// console.log(str2);

//  Objects
// var marks = {
//     ravi: 45,
//     shubham: 85,
//     pratik:34
// }
// console.log(marks);

// Boolean
// var a = true;
// var b = false;
// console.log(b);

//  var und = undefined;
// var und
// console.log(undefined);
// console.log(und);

// var n = null;
// console.log(null);
// console.log(n);

// At a very high level, there are two types of data types in javascript:
// 1) primitive data types: undefined, null, number, string, boolean, symbol
// 2) Reference data types: arrays and objects

// Array
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "bablu"];
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[9]);

// 5) Operators in javascript
// i) arithmetic operator
// var a = 40;
// var b = 50;
// console.log("The value of a + b is :", a + b);
// console.log("The value of a - b is :", a - b);
// console.log("The value of a * b is :", a * b);
// console.log("The value of a / b is :", a / b);

// ii) assignment operator
// var c = b;
// c += 2;  (c = c -2)
// console.log(c);

// iii) comparison operator
// var x = 34;
// var y = 56;
// console.log(x==y);

// iv) logical operator
// logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// logical NOT (such ko jhuth aur jhuth ko such akr de)
// console.log(!false);
// console.log(!true);

// 6) Functions in javascript

// function Avg(a,b){
//     return (a + b)/2
// }
// DRY = Do Not Repeat
// c1 = Avg(4,6);
// c2 = Avg(14,16);

// console.log(c1);
// console.log(c2);

// Conditional in javascript
// single if-else statement
// var age = 3;
// if (age<8){
//     console.log("you are a kid");
// }
// else{
//     console.log("you are not a kid")
// }

// if-else ladder
// var age = 5;
// if (age>7){
//     console.log("you are not a kid");
// }
// else if(age<4){
//     console.log("you are a very small kid")
// }
// else{
//     console.log("you are a kid")
// }

// var arr = [1, 2, 3, 4, 5, 6];
// console.log(arr);
// for (i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(value) {
//     console.log(value)
// })

// arr.forEach(function(element){
//     console.log(element);
// })

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// }
// while(j<arr.length);

// Break statement
// var arr = [1, 2, 3, 4, 5, 6];
// for (i=0;i<arr.length;i++){
//     if (i==3){
//         break;
//     }
//     console.log(arr[i]);
// }

//continue statement
// var arr = [1, 2, 3, 4, 5, 6];
// for (var i=0;i<arr.length;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(arr[i]);
// }


// Array Methods
// let myArr = ["fan", "camera", 34, null, true];
// console.log(myArr.length);
// myArr.pop();
// myArr.push("satya");
// myArr.shift();
// myArr.unshift("momos")
// myArr.sort();
// myArr.toString();
// console.log(myArr);


// let str = "satya is a good boy good man";
// console.log(str.length);
// console.log(str.indexOf("good"));
// console.log(str.lastIndexOf("good"));
// console.log(str.slice(0,3));
// console.log(str.replace("satya", "mohan"));
// d = str.replace("good", "bad")    //not inserted semicolon;even though work
// console.log(d)                    //not inserted semicolon;even though work


// let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getDay());
// console.log(myDate.getDate());

// let elem = document.getElementById("demo");
// console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

// elemClass[0].classList.add("bg-secondary");
// elemClass[0].classList.add("text-success");
// elemClass[0].style.background = "yellow";
// elemClass[0].style.border = "2px solid black";

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// // console.log(elemClass[0].innerText);

// tn = document.getElementsByTagName("div");
// console.log(tn);
// createdElement = document.createElement("p");
// createdElement.innerText = "This is a created para";
// tn[0].appendChild(createdElement);


// createdElement2 = document.createElement("b");
// createdElement2.innerText = "This is a created bold";
// createdElement2.style.color = "red";
// tn[0].replaceChild(createdElement2, createdElement);

// removechild(element); --> removes an element
// document.location
// document.title
// document.URL
// document.scripts  explore more in console there are lots of data


// selecting using query
// sel = document.querySelector(".container");
// console.log(sel);

// sel = document.querySelectorAll(".conatiner");
// console.log(sel);

// Events in javascripts

// function clicked(){
//     console.log("The button was clicked");
// }

// window.onload = function(){
//     console.log("the document was loaded");
// }

// firstcontainer.addEventListener("click", function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b> we have clicked </b>"
//     console.log("click hua");
// })                                                        // forEach = addEventListener cause see the {curly brackets syntax}


// firstcontainer.addEventListener("mouseover", function(){
//     console.log("mouse on container");
// }) 

// firstcontainer.addEventListener("mouseout", function(){
//     console.log("mouse out of container");
// }) 

// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstcontainer.addEventListener("mouseup", function(){
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML;
//     console.log("mouse up when clicked on container");
// }) 

// firstcontainer.addEventListener("mousedown", function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b> we have clicked </b>";
//     console.log("mouse down when clicked on container");
// }) 

// Arrow functions
// function summ(a, b){
    // return a + b
// }
// q = summ(4,6);
// console.log(q);   OR

// summ = (a, b) =>{
//     return a + b;
// }
// w = summ(4, 8);
// console.log(w);

// set timeout and set interval

// logkaro = () => {
//     document.querySelectorAll(".container")[1].innerHTML = "set timeout applied"
//     console.log("i am your boss");
// }
// setTimeout(logkaro, 2000);
// clr = setInterval(logkaro,3000);   
// clearInterval(clr);       // to stop interval
// clearTimeout(clr);  same as clearinterval

//Javascript local storage    (defn: it helps to save data in user's computer)
// perform all these tasks in console
//do not store sensitive data in local storage cause anybody can access it 

// localStorage.setItem("name", "satya");
// localStorage
// localStorage.getItem("name");
// localstorage.removeItem("name");
// localStorage.clear();


// // JSON
// obj = {name:"satya", length:1, a:{this:"that\'s it"}};
// jso = JSON.stringify(obj);
// console.log(typeof(jso));
// console.log(jso);

// parsed = JSON.parse(`{name:"satya", length:1, a:{this:"that\'s it"}}`);
// console.log(parsed);


// // template literals - Backticks
// a = 56;
// console.log(`this is number ${a}`);

