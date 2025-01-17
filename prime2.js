
function isPrime(num){
    let prime = 0;

    if(num<2){
        prime = 1;
    }
    else{
        for(let i=2; i<=num/2; i++){
            if(num%i==0){
                prime = 1;
                break;
            }
        }
    }

    if(prime==0){
        return "this is a prime number";
    }
    else{
        return "this is not a prime number";
    }
}

console.log(isPrime(11));