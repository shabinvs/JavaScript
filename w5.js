
function abbr(str){
    let split_name = str.trim().split(" ");
    let arr = split_name[0] + " "+ split_name[1].charAt(0) + '.';
    return arr;
}

console.log(abbr('shabin vs'));