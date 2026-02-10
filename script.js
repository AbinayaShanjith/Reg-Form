var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var submitBtn = document.getElementById("submitBtn");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Name is required.";
        nameInput.className = "invalid";
        return false;
    }
    nameError.innerHTML = "";
    nameInput.className = "";
    return true;
}

function validateEmail() {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.innerHTML = "Enter a valid email address.";
        emailInput.className = "invalid";
        return false;
    }
    emailError.innerHTML = "";
    emailInput.className = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.innerHTML = "Password must be at least 6 characters.";
        passwordInput.className = "invalid";
        return false;
    }
    passwordError.innerHTML = "";
    passwordInput.className = "";
    return true;
}

function validateForm() {
    submitBtn.disabled = !(
        validateName() &&
        validateEmail() &&
        validatePassword()
    );
}

nameInput.oninput = validateForm;
emailInput.oninput = validateForm;
passwordInput.oninput = validateForm;

document.getElementById("registrationForm").onsubmit = function (e) {
    e.preventDefault();

    alert("Form submitted successfully!");

    // Reset form fields
    this.reset();

    // Clear error messages
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    passwordError.innerHTML = "";

    // Remove invalid styling
    nameInput.className = "";
    emailInput.className = "";
    passwordInput.className = "";

    // Disable submit button again
    submitBtn.disabled = true;
};
