
let str = "";

for(let i=1; i<=5; i++){

    for(let j=1; j<=i; j++){
        str += " ";
    }

    for(let k=1; k<=4; k++){
        str += "* ";
    }

    str += "\n";
}

console.log(str);