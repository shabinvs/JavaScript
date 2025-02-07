let arr = [1, 5, 3, 4, 2];

let minIndex = 0;  
let maxDiff = -Infinity;
let result = null;

for (let j = 1; j < arr.length; j++) {
    let diff = arr[j] - arr[minIndex];

    if (diff > maxDiff) {
        maxDiff = diff;
        result = [minIndex, j]; 
    }

    if (arr[j] < arr[minIndex]) {
        minIndex = j; 
    }
}

console.log(result); 
