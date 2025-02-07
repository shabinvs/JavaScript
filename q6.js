
let sentence = "hello world! this is a test.";
let result = sentence.replace(/\b\w/g, match => match.toUpperCase());
console.log(result);