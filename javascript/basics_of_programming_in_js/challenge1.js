const PHONE_PRICE = 83.99;
const TAX_RATE = 6.5;
const ACCESSORY_PRICE = 7.99;
const STARTING_BALANCE = 500;

var currentBalance = STARTING_BALANCE;
var numberOfPhones = 0;

function tax(x) {
	return x += (x * (6.5 / 100));
}

//phone cost after tax
function phonePrice() {
	return tax(PHONE_PRICE);
}

//accessory cost after tax
function accessoryPrice() {
	return tax(ACCESSORY_PRICE);
}

//cost of phone + accessory
function totalCost() {
	return (phonePrice() + accessoryPrice()).toFixed(2);
}

console.log("$" + totalCost());

//printing current balance & total number of phones purchased
function remainingBalance() {
	/*
	console.log("Remaining balance: $" + currentBalance.toFixed(2));
	console.log("Number of phones bought: " + numberOfPhones);
	*/
	console.log("Phones bought: " + numberOfPhones + " Remaining balance: $" + currentBalance.toFixed(2));
}

//console.log(totalCost());

while (currentBalance >= totalCost()) {
	numberOfPhones++;
	currentBalance -= totalCost();
	remainingBalance();
}


