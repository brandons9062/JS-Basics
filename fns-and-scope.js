//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler(name){
    if(name === 'Tyler'){
      return true;
    }
    return false;
}

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


 function getName() {
  var name = prompt("What is your name?");
  console.log(name);
  return name;
}



//////////////////PROBLEM 3////////////////////



function welcome(){
  return alert("Welcome, " + getName());
}


//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Parameters are the the variables used in a function declaration. Arguments are the actual values passed to a function. For example: function addEmUp(num1, num2){return num1+num2;} addEmUp(5, 8); num1 and num2 are parameters, 5 and 8 are arguments.

//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //The falsy values are: "", null, NaN, 0, false, and undefined. Use and if statement.


//////////////////PROBLEM 6////////////////////
//Create a function called myName that returns your name
  function myName() {
    return "Taylor";
  }
//Now save the function definition of myName into a new variable called newMyName
  var newMyName = function() {
    return myName();
  };
//Now alert the result of invoking newMyName
alert(newMyName());
//////////////////PROBLEM 7////////////////////
//Create a function called outerFn which returns an anonymous function which returns your name.
  function outerFn() {
     return function() {
      return "Taylor";
    };
  }
//Now save the result of invoking outerFn into a variable called innerFn.
  var innerFn = outerFn();
//Now invoke innerFn.
innerFn();