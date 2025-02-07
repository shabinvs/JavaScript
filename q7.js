function validateStrongPassword(password) {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    return regex.test(password);
}

// Example usage:
let password1 = "StrongPass123@";
let password2 = "weakpass";


console.log(validateStrongPassword(password1)); 
console.log(validateStrongPassword(password2)); 
