
function mail(str){
    
    let splitted = str.trim().split("@");
    let part1 = splitted[0];
    let avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg))
    part2 = splitted[1];
    let part3 = part1+"....@"+part2;
    return part3;
}

console.log(mail('shabinvs64@gmail.com'));