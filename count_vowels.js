
let count = 0;
let vowels = "hello";

let vowelsCount = vowels.length;

for(let i=0; i<vowelsCount; i++){
    if(vowels[i]=='a' ||vowels[i]=='A'|| vowels[i]=='e' ||vowels[i]=='E' || vowels[i]=='i' ||vowels[i]=='I' || vowels[i]=='o' ||vowels[i]=='O'||vowels[i]=='u' ||vowels[i]=='U'){
        count++;
    }
}

console.log(count);