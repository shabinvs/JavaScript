
let str = "";
let k = 1;

for(let i=1; i<=4; i++){
    
    for(let j=1; j<=i; j++){
        str += `${k} `;
        k++;
    }
    str += "\n";
}

console.log(str);