
// let n1 = 9, n2 = 27;
// let gcd;

// for(i=1; i <= n1 && i <= n2; i++)
//     {
//         if(n1%i==0 && n2%i==0)
//             gcd = i;
//     }

// console.log(gcd);

let gcd;

function numbers(n1, n2){
    for(let i=1; i<=n1&&i<=n2; i++){
        if(n1%i==0 &&n2%i==0){
            gcd = i; 
        }
    }
    return gcd;
}

console.log(numbers(8, 64));
