
let str = "";

for(let i=1; i<=4; i++){
    for(let j=1; j<=4-i; j++){
        str += "  ";
    }

    for(let k=1; k<=i; k++){
        str += "*   ";
    }

    str += "\n";
}

for(let i=1; i<=3; i++){
    for(let j=1; j<=i; j++){
        str += "  ";
    }

    for(let k=3; k>=i; k--){
        str += "*   ";
    }

    str += "\n";
}


console.log(str);