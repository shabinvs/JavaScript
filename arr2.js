
let num1 = [1,2,2,1];
let num2 = [2,2];
let num3 = [];

let len1 = num1.length;
let len2 = num2.length;

for(let i=0; i<len1; i++){
    for(let j=0; j<len2; j++){
        if(num1[i] === num2[j]){
            num3[i] = num2[i]; 
        }
    }
}

console.log(num3);