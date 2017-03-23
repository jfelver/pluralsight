alert("This is a zombie apocalypse. You are looting a store and suddenly a zombie bursts through the door!");

var weapon = prompt("What's your weapon of choice?!");

//this is determining whether or not the encounter with the zombie will end in life or death
var randomNumber = Math.round(Math.random());

alert("You attacked the zombie with your "+ weapon);

//announcing whether or not you've won or lost
if (randomNumber == 1){
    alert("You killed the zombie, you win!");
} else {
    alert("The zombie bit you. You later on died and went on to infect others in the town.");
}