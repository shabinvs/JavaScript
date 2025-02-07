
function capti(str){
    let str1 = str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()});
    return str1;
}

console.log(capti('js string exercises'));