// Donna Quach, JavaScript 310B, Autumn 2023
// Class 7 Exercises 

// TODO
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const form = document.getElementById("connect-form");
const select = document.getElementById("contact-kind");
const employees = document.getElementById("num-of-employees");
const os = document.getElementById("operating-system");

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

    if (selectedValue == "business") {
        // build and append to the DOM an input field for Number of Employees
        employees.parentElement.classList.remove("hidden");
        os.parentElement.classList.add("hidden");
    }
    else if (selectedValue == "technical") {
        // build and append to the DOM an input field for Operating System
        os.parentElement.classList.remove("hidden");
        employees.parentElement.classList.add("hidden");
    }
}

select.addEventListener("change", handleSelect(select));

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // check if all inputs are valid
    if(validLength(firstName, 3) && validLength(lastName, 3) && validateEmail(email)) 
    {
        valid = true; 
    }
    else 
    {
        valid = false; 
        e.preventDefault();
    }
}); 