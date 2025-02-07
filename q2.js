let para = 'Portugal is a southern European country on the Iberian Peninsula, bordering Spain. Its location on the Atlantic Ocean has influenced many aspects of its culture: salt cod and grilled sardines are national dishes, the Algarves beaches are a major destination and much'
let arr = para.toLowerCase().split(" ");
let len = arr.length;
let word = 'portugal';
let count = 0;

for(let i=0; i<len; i++){
    if(arr[i]==word){
        count++;
    }
}

console.log(`${word} count is ${count}`);