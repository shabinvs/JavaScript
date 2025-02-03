let pattern = "";

for(let i=1; i<=4; i++){
    for(let j=1; j<=4-i; j++){
        pattern += "  ";
    }

    for(let k=1; k<=2*i-1; k++){
        pattern += `${i} `;
    }

    pattern += "\n";
}

console.log(pattern);