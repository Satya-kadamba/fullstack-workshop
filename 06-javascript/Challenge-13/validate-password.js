const validatePassword = (password) => {
  let score = 100;
  
  const result = {
    isValid: true,
    score,
    errors: [],
    suggestions: []
  };

  const rules = [
    { test: password.length >= 8, penalty: 20, msg: "Minimum 8 characters required", sug: "Increase the password length" },
    { test: /[A-Z]/.test(password), penalty: 15, msg: "Missing uppercase letter", sug: "Add at least one uppercase (A-Z)" },
    { test: /[a-z]/.test(password), penalty: 15, msg: "Missing lowercase letter", sug: "Add at least one lowercase (a-z)" },
    { test: /\d/.test(password), penalty: 15, msg: "Missing number", sug: "Include at least one digit (0-9)" },
    { test: /[!@#$%^&*()_\-+=]/.test(password), penalty: 15, msg: "Missing special character", sug: "Include a special character (!@#$%^&* etc.)" }
  ];

  const commonPasswords = ["password", "123456", "qwerty", "abc123"];

  rules.forEach(rule => {
    if (!rule.test) {
      result.isValid = false;
      result.score -= rule.penalty;
      result.errors.push(rule.msg);
      result.suggestions.push(rule.sug);
    }
  });

  if (commonPasswords.includes(password.toLowerCase())) {
    result.isValid = false;
    result.score -= 20;
    result.errors.push("Password is too common and unsafe");
    result.suggestions.push("Choose something unique, not a common password");
  }

  result.score = Math.max(0, result.score); // prevent negative

  return {
    ...result,
    summary: `Final Score: ${result.score}/100 - ${result.isValid ? "Valid Password 😎" : "Weak Password 🚫"}`
  };
};

// ---------------- Test Code ----------------

console.log(validatePassword("abc123"));
console.log(validatePassword("J@V@Fu11StackDev"));
