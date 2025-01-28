
let str = " Hello, JavaScript Learner! ";

let len = str.length;
console.log(len);

let char = str.at(7);
console.log(char);

let asc = str.charCodeAt(8);
console.log(asc);

let last = str.at(-1);
console.log(last);

console.log(str[4]);

let first = str.slice(2, 12);
console.log(first);

let arr2 = str.substring(3, 10);
console.log(arr2);

let sub = str.substr(7, 5);
console.log(sub);

let upper = str.toUpperCase();
console.log(upper);

let lower = str.toLowerCase();
console.log(lower);

let str2 =  " Let's code!";
let text = str.concat(str2);
console.log(text);

let trim = str.trim();
console.log(trim);

let trfirst = str.trimStart();
console.log(trfirst);

let trlast = str.trimEnd();
console.log(trlast);

let pad1 = str.padStart(40, "-");
let pad2 = str.padEnd(40, "-");
console.log(pad1);
console.log(pad2);

let rp = str.repeat(2);
console.log(rp);

let replace = str.replace("Learner", "Developer");
console.log(replace);

let replace2 = str.replaceAll(/e/g, "3");
console.log(replace2);

let word = str.split("|");
console.log(word);
