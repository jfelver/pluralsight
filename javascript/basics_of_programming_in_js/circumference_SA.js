function r_from_circ(circumference){
	return (circumference/(2*Math.PI));
}
function SA(radius){
	return Math.PI*Math.pow(radius,2);
}
function SA_from_Circ(circumference){
	return Math.PI*Math.pow((circumference/(2*Math.PI)),2);
}
console.log(SA_from_Circ(17));
console.log("The difference between the two is: "+(SA_from_Circ(22)/SA_from_Circ(17)*100).toFixed(3)+"%")