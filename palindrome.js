
let str = "malayalam";
let sub_str = "";

let len_str = str.length;

for(let i=len_str-1; i>=0; i--){
    sub_str += str[i];
}

if(str===sub_str){
    console.log("this is palindrome");
}
else{
    console.log("this is not a palindrome");
    
}