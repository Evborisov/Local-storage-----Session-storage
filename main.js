/*
// Chapter 1 - Local Storage
localStorage.setItem('testKey', 1);
console.log(localStorage.getItem('testKey'));

let data = 'Hello world!';
localStorage.setItem('data', data);
console.log(localStorage.getItem('data'));

// We can give a key and data to the storage using shorter syntax, but there are some difference between.
//The event is not happen in this way of storing items
localStorage.test2 = 2;
console.log(localStorage.test2);

let food = 'orange';
localStorage[food] = 'cherry';

let car = 'toString';
localStorage[car] = 'cherry';

//this way of adding item to storage is creating an event, that you can you for any purpose, for example to inform user about the results of the data storing in the local storage
localStorage.setItem('toString', 'cherry');

//Delete 3 ways: 1-objectr oriented, 2-with localStorage method, 3-complete clear
delete localStorage.food;
localStorage.removeItem('food');
localStorage.clear();

//Looping over keys (for of is not iterable thus local storage is not iterable)


let myArray = [];
let myObject = new Object;

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    myArray.push(localStorage.getItem(key));
    myObject[key] = localStorage.getItem(key);
}

console.log(myArray, myObject);

//just we can receive values as mixed with default method for localStorage
for (let key in localStorage) {
    console.log(key);
}

//Tricky way to use for...of. We use for...of directly.
let keys = Object.keys(localStorage);
console.log(keys);
for (let key of keys) {
    console.log('hi:', key, localStorage.getItem(key));
}

//Keys and values are string

//Object
let user = {
    name: 'Dali'
}

localStorage.user = user;
console.log(localStorage.user); // [object, object]

//Arrray
let userArray = ['Dali', 'Gonzalo'];
localStorage.user2 = userArray;
console.log(localStorage.user2); // Dali,Gonzalo



//Chapter -2 : Session Storage


// on different pages session storage can have different values 
//let userMessage = prompt('Please write your message');
//sessionStorage.setItem('company', userMessage);
//console.log(sessionStorage.getItem('company'));

// on different pages local storage will always have same value
//localStorage.setItem('company', userMessage);
//console.log(localStorage.getItem('company'));

console.log(sessionStorage); //Will see it as an object in the console.

sessionStorage.kitchen = 'not delivered';
console.log(sessionStorage.kitchen);
console.log(sessionStorage.getItem('kitchen'));

let ikea = 'big furniture store';
sessionStorage[ikea] = 'never ever again';
console.log(sessionStorage[ikea]);


sessionStorage.removeItem('big furniture store');
let myStory = [];
let mySadStory = new Object;
for (let a = 0; a < sessionStorage.length; a++) {
    let key = sessionStorage.key(a);
    myStory.push(sessionStorage.getItem(key));
    mySadStory[key] = sessionStorage.getItem(key);
}

console.log(myStory, mySadStory);


// Chapter 3 : storage events



localStorage.setItem('now', Date.now());
window.onstorage = event => {
    console.log(event.key);
}

*/
// Chapter 4 : Exercices

//console.log('THIS IS THe EXERCISE\n\n\n\n')

//localStorage.setItem('name', 'yourname');
//console.log(localStorage.getItem('name'));

//let ninJa = prompt('Please provide a piece of data');
//sessionStorage.setItem('entry', ninJa);
//console.log(sessionStorage.getItem('entry'));

/*
the plann:
case when not logged in
1. header
add event listener to the page load to display correct welcome items.
-please log in is shown
-login, register buttons are shown
-logout button is hiden

2. main

case when logged in
1. header
- Username + welcome

2. main 
- first div with login/register options are not shown
- second div with photo is shown


*/

window.onload = () => {
    document.getElementById('welcome').innerHTML = "Please Login or Register";
    document.getElementById('logout').style.display = "none";
}


let loggedIn = "";
let userName = document.getElementById('name').value;
let userPass = document.getElementById('password').value;
let givenName = localStorage.getItem('user');
let givenPass = localStorage.getItem('pass');

document.getElementById('login1').addEventListener("click", userRegister);
document.getElementById('register').addEventListener("click", userRegister);

function userRegister() {

    localStorage.setItem('user', userName);
    localStorage.setItem('pass', userPass);
    document.getElementById('name').value = "";
    document.getElementById('password').value = "";
    alert("Thank you for the registration! You can now log in.")

}

document.getElementById('login').addEventListener("click", userLogin);

function userLogin() {
    if (userName === givenName && userPass === givenPass) {
        loggedIn == true;
    } else {
        alert('Username or password is incorrect');
    }

}

if (loggedIn == true) {
    document.getElementById('register').style.display = "none";
    document.getElementById('welcome').innerHTML = `Welcome + ${userName}`;
}