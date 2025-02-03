
let arr1 = ['ronaldo', 'messi', 'neymar', 'rodrigo', 'messi', 'luca', 'neymar'];
let arr2 = [];
let len = arr1.length;

for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
        if(arr1[i]==arr1[j]){
            arr2.push(arr1[i])
        }
    }
}

console.log(arr2);


    