let n = 14; // Change this number to test
let seenNumbers = [];

while (n !== 1 && n > 4) { // Since numbers 2, 3, and 4 always loop, we stop if n <= 4
    seenNumbers.push(n);
    let sum = 0;

    while (n > 0) {
        let digit = n % 10; // Get last digit
        sum += digit * digit; // Square and add
        n = Math.floor(n / 10); // Remove last digit
    }

    n = sum;
}

console.log(n === 1); // true if happy number, false if not
