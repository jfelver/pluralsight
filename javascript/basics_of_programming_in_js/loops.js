// if (a) { .. }

// while (a) { .. }

var a = 10;

/* 
while(a+1){
	console.log(a);
	a--;
}
*/

var b = "a bunch of different words";
/*
for (a = b.length; a > 0 ; a--){
	console.log(b.substring(0,a));
}
*/

var a = 1;
while(true){
	if(a > b.length){
		break;
	}
	console.log(b.substring(0,a));
	a++;
}

/*
for (;;) this conditional statement will run forever because the condition will never fail
*/