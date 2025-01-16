
let f1 = 0;
let f2 = 1;
let f3;

for(let i=1; i<=10; i++){
    console.log(f1);
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
}