const toDoItems = document.getElementsByClassName("to-do-items")[0];

const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

/* Added an event listener to the input box so that user can click on the enter key to add an item to the list as opposed to always having click on the submit */
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter")
        addItem();
})

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';

    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function(){
        checkIcon.style.color = "limegreen";
    })

    divChild.appendChild(checkIcon);

    trashIcon.className = "fa-solid fa-trash";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function(){
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
};


/* Delete Object Properties*/

var person = {
    "firstName" : "Alaz",
    "middleName" : null,
    "lastName" : "Kalelioglu",
    "age" : 22
};

delete person.age;
console.log(person);

/* Array creation and methods */

const tvShows = ["Breaking Bad", "Game of Thrones", "Rick and Morty", "Sucession"];
let length = tvShows.length; // getting the length of the array

let tvShow = tvShows[1]; // accessing array elements 
tvShows[3] = "Peaky Blinders"; // changing an array element


tvShows.push("Attack on Titan");
tvShows.push("Friends"); // adding elements to array

tvShows.pop(); // popping element out of array

console.log(tvShow);
console.log(tvShows);

/* First Class Functions
 Passing a function as an argument */

function printHi() {
    console.log("Hi I am function passed as an argument so I am a first class Function");
  }
  
  function executeFn(functionAsArgument) {
    functionAsArgument();
  }
  
  executeFn(printHi); // passing printHi function as an argument  

/* IIFE (Immediately Invoked Function Expression)*/

(function () {
    console.log('This is an IIFE!');
})();




