let arr = [2, 4, 6, 8];
let target = 48;
let len = arr.length;

for(let i=0; i<len; i++){
    for(let j=i+1; j<len; j++){
        if(arr[i]*arr[j]==target){
            if(arr[i]%2==0 && arr[j]%2==0){
                console.log(i, j);
            }
            else{
                console.log('no distinct even numbers');
            }
        }
    }
}