
function triangleType(a, b, c){
    if(a + b > c && c + b > a && c + a > b){
        if(a===b && b===c){
            return "this is a Equilateral triangle";
        }
        else if(a===b || b===c || a===c){
            return "this is a isosceles triangle";
        }
        else{
            return "this is a scalene triangle";
        }
    }
    else{
        return "this given sides does not form a valid triangle";
    }
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 6, 4));
console.log(triangleType(5, 8, 5));
