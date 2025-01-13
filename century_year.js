
function centuryYear(year){
    if(year%100==0){
        return "this is a century year";
    }
    else{
        return "this is not a century year";
    }
}

console.log(centuryYear(2025));
console.log(centuryYear(2000));
console.log(centuryYear(2010));
