
function determineQuadrant(x, y){
    if(x > 0 && y > 0){
        return "Quadrant 1";
    }
    else if(x < 0 && y > 0){
        return "Quadrant 2";
    }
    else if(x < 0 && y < 0){
        return "Quadrant 3";
    }
    else if(x > 0 && y < 0){
        return "Quadrant 4";
    }
}

console.log(determineQuadrant(3, 4));
console.log(determineQuadrant(-6, 4));
console.log(determineQuadrant(-6, -4));
console.log(determineQuadrant(4, -4));
