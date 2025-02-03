
let str = "";

for(let i=1; i<=7; i++){
    for(let j=1; j<=7; j++){
        if(j>=i || j<=8-i){
            str += "* ";
        }
        else{
            str += " ";
        }
    }
    str += "\n";
}

console.log(str);

