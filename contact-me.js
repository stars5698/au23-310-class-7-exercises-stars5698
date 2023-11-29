// Donna Quach, JavaScript 310B, Autumn 2023
// Class 7 Exercises

// TODO
const theName = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const select = document.getElementById("contact-kind");
const jobTitle = document.getElementById("job-title");
const jobURL = document.getElementById("job-URL");
const codingLanguage = document.getElementById("coding-lang");
const msg = document.getElementById("message");

let valid = false; 

// check if an input meets a length requirement
const validLength = (input, min) => {
    if (input.value.trim().length > min) {
        input.parentElement.classList.remove("invalid");
        return true; 
    }
    else {
        input.parentElement.classList.add("invalid");
        return false; 
    }
}; 

// check if an email meets a format requirement
const validateEmail = (emailField) => {
    const re = /\w+@\w+\.\w+/; 
    if (re.test(emailField.value.trim())) {
        emailField.parentElement.classList.remove("invalid");
        return true; 
    }
    else {
        emailField.parentElement.classList.add("invalid");
        return false; 
    }
}; 


const handleSelect = (selectElement) => {
    const selectedValue = selectElement.value; 

    if (selectedValue == "job") {
        // build and append to the DOM an input field for Number of Employees
        jobTitle.parentElement.classList.remove("hidden");
        jobURL.parentElement.classList.remove("hidden");
        codingLanguage.parentElement.classList.add("hidden");
    }
    else if (selectedValue == "talk") {
        // build and append to the DOM an input field for Operating System
        codingLanguage.parentElement.classList.remove("hidden");
        jobTitle.parentElement.classList.add("hidden");
        jobURL.parentElement.classList.add("hidden");
    }
}

select.addEventListener("change", handleSelect(select));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // check if all inputs are valid
    if(validLength(theName, 5) && validateEmail(email) && validLength(msg, 10))
    {
        valid = true; 
    }
    else 
    {
        valid = false; 
        e.preventDefault();
    }
}); 