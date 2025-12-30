function validatePassword(password) {
  const result = {
    isValid: true,
    score: 100,
    errors: [],
    suggestions: []
  };

  const commonPasswords = ["password", "123456", "qwerty", "abc123"];
  
  if (password.length < 8) {
    result.isValid = false;
    result.score -= 20;
    result.errors.push("Minimum 8 characters required");
    result.suggestions.push("Increase the password length");
  }

  if (!/[A-Z]/.test(password)) {
    result.isValid = false;
    result.score -= 15;
    result.errors.push("Missing uppercase letter");
    result.suggestions.push("Add at least one uppercase (A-Z)");
  }

  if (!/[a-z]/.test(password)) {
    result.isValid = false;
    result.score -= 15;
    result.errors.push("Missing lowercase letter");
    result.suggestions.push("Add at least one lowercase (a-z)");
  }

  if (!/\d/.test(password)) {
    result.isValid = false;
    result.score -= 15;
    result.errors.push("Missing number");
    result.suggestions.push("Include at least one digit (0-9)");
  }

  if (!/[!@#$%^&*()_\-+=]/.test(password)) {
    result.isValid = false;
    result.score -= 15;
    result.errors.push("Missing special character");
    result.suggestions.push("Include a special character (!@#$%^&* etc.)");
  }

  if (commonPasswords.includes(password.toLowerCase())) {
    result.isValid = false;
    result.score -= 20;
    result.errors.push("Password is too common and unsafe");
    result.suggestions.push("Choose something unique, not a common password");
  }


  if (result.score < 0) result.score = 0;

  return result;
}


// ---------------- Test Code ----------------


console.log(validatePassword("abc123"));

console.log(validatePassword("J@V@Fu11StackDev"));
