var a = 3.144673243;

function printAmount(){
	console.log(a.toFixed(2));
}

for(b=0;a<10;b++){
	printAmount();
	a=a+.5;
}

/*
function foo(b){..}

function bar(){..}

foo( bar )  //passing a function
foo( bar() ) //passing the result of the function
*/
var b = 10;

function ex1(c){
	b = b*2;
	b = b+c;
	return b/3;
}

console.log(ex1(2));
console.log(b);

