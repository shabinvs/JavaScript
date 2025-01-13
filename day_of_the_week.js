
function dayOfTheWeek(number){

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    if(number<1 || number>7){
        return "invalid number!..";
    }
    else{
        return days[number-1];
    }

}

console.log(dayOfTheWeek(2));
console.log(dayOfTheWeek(0));
console.log(dayOfTheWeek(8));
console.log(dayOfTheWeek(3));
