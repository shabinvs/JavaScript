
function is_string(str){
    if(typeof str === 'string'){
        return true;
    }
    else{
        return false;
    }
}

console.log(is_string('w3schools'));
console.log(is_string([1,2,5,7]));