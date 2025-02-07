function para(str){
    let str1 = str.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/,"").replace(/\s/g, "-")
    return str1;
}

console.log(para('Robin Singh from USA.'));