
let str = "";

let n = 6;

for(let i=1; i<=n; i++){
    for(let j=1; j<=n; j++){
        if(i==1 || i==n || j==1 || j==n){
            str += "* ";
        }
        else{
            str += "  ";
        }
    }
    str += "\n";
}

console.log(str);
