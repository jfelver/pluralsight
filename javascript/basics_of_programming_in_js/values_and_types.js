42 / 2; //number

"42"[0]; // "4" strings can access things character by character [index]
"abc"[1]; // "b"

var a = 41;
var b = "41";

//console.log(a);
//console.log(b);

a = a / 2;

//console.log(String(a)[0]);

var c = 3;

c = c + ""; //implicit coersion to a string 

function printValue(a){
	console.log(a);
};

//printValue("42");

var amount = 99.99;

amount = amount * 2;

console.log( amount );      // 199.98

// convert `amount` to a string, and
// add "$" on the beginning
amount = "$" + String( amount ); //explicit coersion
amount = "$" + amount; //implicit coersion

console.log( amount );      // "$199.98"
