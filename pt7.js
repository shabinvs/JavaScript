
let str = "";

for(let i=1; i<=4; i++){
    for(let j=1; j<=4-i; j++){
        str += "  ";
    }

    for(let k=1; k<=2*i-1; k++){
        str += "* ";
    }

    str += "\n";
}

console.log(str);