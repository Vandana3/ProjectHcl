A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.
<p id="demo"></p>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.carname;
</script>

<script>
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present(x) {
    return x + ", I have a " + this.carname;
  }
}

mycar = new Car("Ford");

document.getElementById("demo").innerHTML = mycar.present("Hello");
</script>

Closure
Global variables can be made local (private) with closures.
A closure is a function having access to the parent scope, even after the parent function has closed.

var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

No other function can increment counter.

Mouse and keyboard functions

Array Functions
The map() method creates a new array with the results of calling a provided function on every element in the calling array.
const numbers = [2, 4, 8, 10];
const halves = numbers.map(x => x / 2);
// halves is [1, 2, 4, 5]

The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const longWords = words.filter(word => word.length > 6);
// longWords is ["exuberant", "destruction", "present"]

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
// total is 7

Datatypes
A primitive data type is data that has a primitive value.
JavaScript defines 5 types of primitive data types:
string
number
boolean
null
undefined
Primitive values are immutable

Objects
Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

This
this refers to the owner
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

Date
var d=new Date()
new Date(year, month, day, hours, minutes, seconds, milliseconds)
new Date(milliseconds)
new Date(date string)

Date in ie and safari
var d = new Date(2011, 01, 07); // yyyy, mm-1, dd  
var d = new Date(2011, 01, 07, 11, 05, 00); // yyyy, mm-1, dd, hh, mm, ss  
var d = new Date("02/07/2011"); // "mm/dd/yyyy"  
var d = new Date("02/07/2011 11:05:00"); // "mm/dd/yyyy hh:mm:ss"  
var d = new Date(1297076700000); // milliseconds  
var d = new Date("Mon Feb 07 2011 11:05:00 GMT");

AJAX
<!DOCTYPE html>
<html>
<body>
<div id="demo">
<h1>The XMLHttpRequest Object</h1>
<button type="button" onclick="loadDoc()">Change Content</button>
</div>
<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}
</script>
</body>
</html>

AJAX = Asynchronous JavaScript And XML.
AJAX is not a programming language.
AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
AJAX uses both a browser built-in XMLHttpRequest object to get data from the web server and JavaScript and HTML DOM to display that content to the user. Despite the name “AJAX” these calls can also transport data as plain text or JSON instead of XML.

The jQuery ajax() method provides core functionality of Ajax in jQuery. It sends asynchronous HTTP requests to the server.
The ajax() methods performs asynchronous http request and gets the data from the server.

$.ajax(url);
$.ajax(url,[options]);

$.ajax('/jquery/getjsondata', 
{	
	type: 'GET',
    dataType: 'json', // type of response data
    timeout: 500,     // timeout milliseconds
    success: function (data,status,xhr) {   // success callback function
        $('p').append(data.firstName + ' ' + data.middleName + ' ' + data.lastName);
    },
    error: function (jqXhr, textStatus, errorMessage) { // error callback 
        $('p').append('Error: ' + errorMessage);
    }
});


Arrow functions were introduced in ES6.
Arrow functions allow us to write shorter function syntax:
hello = () => {
  return "Hello World!";
}
