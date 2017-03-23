var a;
var b=1;

var foo;

foo = function(c){
	return c*3;
};

a = b * 2 + foo(1);

var double = function(c){
	return c*2;
};

var circumference_to_SA = function(circumference){
	var r = circumference/(2*3.14)
	return 3.14*r*r;
};

var diff = function(big,small){
	var difference =  ((circumference_to_SA(big) / circumference_to_SA(small)) * 100)-100;
	console.log ("The difference is: " + difference + "%");
};

console.log (diff(17,16));
console.log (diff(22,17));