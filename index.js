//Part 1
let Username = "John";
const age = 25;
console.log(`Hello, my name is ${Username}} and I am ${age} years old.`);
name = "Jamie";
console.log(`Hi, my name is ${Username} and I am ${age} years old.`);


//Part 2
let people = ["Jogn", "Jamie", "Alex", "Sam", "Chris"];
people.forEach(name => {
    console.log(name.toUpperCase());
});
people.push("Taylor");
console.log("New Array: ", people);

//Part 3
let hobby = {
    name: "Reading",
    indoor : true,
    hoursPerWeek: 6,
    type: "Leisure", 
    instruments: ["Books", "E-Readers", "Audiobooks"],
    getHobbyInfo: function() {
        return `${this.name} is a ${this.type} hobby that takes up ${this.hoursPerWeek} hours per week. It's an ${this.Indoor ? "indoor" : "outdoor"} hobby using tools like: ${this.instruments.join(", ")}.`;
    }
};
console.log(hobby.getHobbyInfo());

//Part 4 
function checkNumberType(num) {
    if (num > 0){
        return "Positive";
    } else if (num < 0){
        return "Negative";
    } else {
        return "Zero";
    }
}
console.log(checkNumberType(7));
console.log(checkNumberType(-1)); 
console.log(checkNumberType(0)); 

//Part 5
class Hobby {
    constructor( name , indoor, hoursPerWeek){
this.name = name;
this.indoor = indoor;
this.hoursPerWeek = hoursPerWeek;
    }
    describe() {
        console.log(`${this.name} is a ${this.indoor ? "indoor" : "outdoor"} hobby that takes up ${this.hoursPerWeek} hours per week.`);  
    }
}
const myHobby = new Hobby("Reading", true, 6);
const myHobby2 = new Hobby("Hiking", false, 4);

myHobby.describe();   
myHobby2.describe();