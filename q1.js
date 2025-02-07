
let arr = ['apple','car','mango','carrot'];
let arr1 = []
let word = "c";

for(let i=0;i<arr.length;i++){
    if(arr[i].startsWith(word)){
        arr1.push(arr[i]);
    }
}

console.log(arr1);