var maxTime = 1000;

var evenDoubler = function (v, callback){
    
    
};

var doSomething = function(err, results, time){
    console.log("step2");
    
    if (err){
        console.log("ERROR" + err.message);
    } else {
        console.log("The results are: " + results + " (" + time + " ms)");
    }
};
evenDoubler(2,doSomething);
console.log("-----");
