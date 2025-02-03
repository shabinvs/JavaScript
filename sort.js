
let arr = [2, 0, 3, 0 , 1, 8]
let len = arr.length;
// let count = 0;

for(let i=0; i<len; i++){
    if(arr[i]==0){
        arr.splice(i, 1);
        // count++;
        arr.push(0);
    }
}

console.log(arr);