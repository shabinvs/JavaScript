let pattern = "";

for(let i=5; i>=1; i--){
    for(let j=1; j<=5-i; j++){
        pattern += " ";
    }

    for(let k=1; k<=i; k++){
        pattern += "* ";
    }

    pattern += "\n";

}

for(let i=2; i<=5; i++){
    for(let j=1; j<=5-i; j++){
        pattern += " ";
    }

    for(let k=1; k<=i; k++){
        pattern += "* ";
    }

    pattern += "\n";
}

console.log(pattern);
