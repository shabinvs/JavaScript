
let pattern = "";

for(let i=1; i<=7; i++){

    for(let k=1; k<=7-i; k++){
        pattern += "  ";
    }

    for(let j=1; j<=i; j++){
        pattern += "* ";
    }
    pattern += "\n";
}

for(let i=7-1; i>=1; i--){
    for(let j=1; j<=7-i; j++){
        pattern += "  ";
    }

    for(let k=1; k<=i; k++){
        pattern += "* "
    }

    pattern += "\n";
}

console.log(pattern);
