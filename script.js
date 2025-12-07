//DOMContentLoaded Event:
document.addEventListener('DOMContentLoaded', function(event) {
//Form Selection:
const form = document.getElementById('registration-form');
//Feedback Division Selection:
const feedbackDiv = document.getElementById('form-feedback')
//Form Submission Event Listener
form.addEventListener('submit', function(event) {
      event.preventDefault()}); // Prevent form submission

//Retrieve User Inputs
const usernameinput = document.getElementById('username').value;
const useremail = document.getElementById('email').value;
const userpword = document.getElementById('password').value;
const username = usernameinput.trim();
const email = useremail.trim();
const password = userpword.trim();
//Initializing Validation Variables:
const isValid = true;
const messages = [];

//Username Validation:
if (username.length < 3) {
    isValid = false;
    messages.push("Name should be more than 3 letters");
}

//Email Validation:
if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
    isValid = true;
    return;
}else {
    isValid = false;
    messages.push("Input a valid email address.")
}

//Password Validation:
if (password.length < 8) {
    isValid = false;
    messages.push("Password must be 8 characters or more");
}

//Feedback Display Logic:
if (isValid = true) {
    feedbackDiv.textContent = "Registration successful!";
    document.getElementById('form-feedback').style.color = #28a745;
    return;
}else {
    isValid = false;
    function addlinebreak() {
        const messages = document.getElementById('form-feedback');
        messages.innerHTML += '<br>';
    }
    document.getElementById('form-feedback').style.color = #dc3545;
}
});
