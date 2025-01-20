const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];

var topper = students.filter((items)=>{
    return (items.score>70);
})

console.log(topper);

var grade = students.map((items)=>{
    var grade;
    if(items.score>=90){
        grade='A';
    }
    else if(items.score<90 && items.score>=80){
        grade= 'B';
    }
    else if(items.score<80 && items.score>=70){
        grade= 'C';
    }
    else if(items.score<70 && items.score>=60){
        grade= 'D';
    }
    else{
        grade= 'E';
    }
    return{...items,grade};
    

})

console.log(grade);

let sum = students.reduce((num1,num2) => {
    return num1 + num2.score;
}, 0);

console.log(sum);

let len = students.length;
console.log("average:",sum/len);


var found=students.filter((item)=>{
    return(item.score>sum/len)
})

console.log(found);