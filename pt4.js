
let str = "";

for(let i=1; i<=4; i++){
    let k = 1;
    for(let j=i; j<=4; j++){
        str += `${k} `;
        k++;
    }

    str += "\n";
}

console.log(str);