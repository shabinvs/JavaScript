
let num = 10;
let prime = 0;

for(let i=1; i<=num; i++){
    prime = 0;
    if(i<2){
        prime = 1;
    }
    else{
        for(let j=2; j<=i/2; j++){
            if(i%j==0){
                prime = 1;
            }
        }
    }

    if(prime==0){
        console.log(i);
    }
}

