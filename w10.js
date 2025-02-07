const swapcase = (str) => 
    str.replace(/[a-zA-Z]/g, (char) => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    );

console.log(swapcase('AaBbc')); 

