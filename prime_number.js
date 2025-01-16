
let num = 1;
let prime = 0;

if(num<2){
    prime = 1;
}

for(let i=2; i<=num/2; i++){
    if(num%i==0){
        prime = 1;
        break;
    }
}

if(prime==0){
    console.log("this is a prime number");
}
else{
    console.log("this is not a prime number");
    
}