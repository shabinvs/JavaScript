
let word = 'Portugal is a southernsm European country';
let arr = word.split(" ");
let longest = arr[0];

for(let i=0; i<arr.length; i++){
    if(arr[i].length > longest.length){
        longest = arr[i];
    }
}

console.log(longest);