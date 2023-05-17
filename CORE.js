// Get the form element
const form = document.querySelector("form");

// Add an event listener to the form submit event
form.addEventListener("submit", (event) => {

// Prevent the form from submitting by default
event.preventDefault();

// Validate the form data
const fullName = document.querySelector("#fullName").value;
const email = document.querySelector("#email").value;
const phone = document.querySelector("#phone").value;
const password = document.querySelector("#password").value;
const confirmPassword = document.querySelector("#confirmPassword").value;

// Validate the name
if (fullName.length < 5) {
alert("Name must not be less than 5 characters");
return;
}

// Validate the email
if (!email.includes("@")) {
alert("Email must have @ character in it");
return;
}

// Validate the phone number
if (phone === "123456789") {
alert("Phone Number should not be 123456789");
return;
}

// Validate the password
if (password === "password" || password === "PASSWORD"){
alert("Password cannot be 'password' ");
return;
}
if (password === fullName){
alert("Password cannot be your name ");
return;
}
if (password.length < 8){
alert("Password should have 8 or more characters ");
return;
}
// Validate the confirm password
if (password !== confirmPassword) {
alert(" password doesn't match");
return;
}

// The form data is valid, submit the form
form.submit();
});