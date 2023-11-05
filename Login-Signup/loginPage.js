//Public declaration of the login and signup forms
const loginForm = document.querySelector("#login");
const createAccountForm = document.querySelector("#createAccount");

// Assigns the text for error/success messages on the login screen
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message") // effects all or only one instance
    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`); // adds corresponding styling
}

// Sets the error message for user inputs (displays under the username and password boxes)
function setInputError(inputElement, message){
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

// Clears the error message for user inputs
function clearInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

// Runs when document is ready to work with
document.addEventListener("DOMContentLoaded", () => {
    // Moves from signup to login page
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault(); // prevents direction via href
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    // Moves from login to signup page
    document.querySelector("#linkLogin").addEventListener("click", e => {
       e.preventDefault();
       createAccountForm.classList.add("form--hidden");
       loginForm.classList.remove("form--hidden");
    });

    //
    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        // PERFORM AJAX/FETCH LOGIN
        setFormMessage(loginForm, "error", "Invalid username/password")
    })

    //
    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signUpUsername" && e.target.value.length > 0 && e.target.value.length < 3){
                setInputError(inputElement, "Username must be at least 3 characters in length")
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});


