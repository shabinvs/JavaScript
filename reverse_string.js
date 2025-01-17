
// let str = "malappuram";

// console.log(str.split("").reverse().join(""));


let str = "malappuram";

var newstring = "";

for(let i=str.length-1; i>=0; i--){

    newstring = newstring + str[i]; 
}

console.log(newstring);