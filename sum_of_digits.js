
let num = 123;
let sum = 0;
let rem;

while(num>0){
    rem = num%10;
    sum=sum+rem;
    num = Math.floor(num/10);
}

console.log(sum);