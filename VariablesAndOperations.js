//create a variable to hold the quantity of available plane seats left on a flight
var availiblePlaneSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
var groceriesCost = 21.34;

//create a variable to hold a person's middle initial
var middleInitial = "H";

//create a variable to hold true if it's hot outside and false if it's cold outside

var hotOutside = true;

//create a variable to hold a customer's first name

var customerFirstName = "Garry"

//create a variable to hold a street address

var streetAddress = "123 Dargiling Way"

//print all variables to the console

console.log(availiblePlaneSeats);
console.log(groceriesCost);
console.log(middleInitial);
console.log(hotOutside);
console.log(customerFirstName); 
console.log(streetAddress);

//a customer booked 2 plane seats, remove 2 seats from the available seats variable
var bookedPlaneSeats = 2
availiblePlaneSeats = availiblePlaneSeats - bookedPlaneSeats;

console.log(availiblePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;
var impulseBuy = 2.15
groceriesCost = groceriesCost + impulseBuy;

console.log(groceriesCost);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = "I"

console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
hotOutside = !

console.log(hotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
var lastName = "Blotter"
var fullName = customerFirstName +" "+ middleInitial +" "+ lastName;

console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable

var nameAndLocation = "They are " + fullName + " and they live at " + streetAddress;

console.log(nameAndLocation);