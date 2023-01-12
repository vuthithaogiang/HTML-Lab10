
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
let password = id("password"),
    form = id("form"),
    errorMsgUsername = classes("error-username"),
    errorMsgPassword = classes("error-password"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (username.value.trim() === "") {
        errorMsgUsername = "username can not blank";
        username.style.border = "2px solid red";
    }
    else {
        errorMsgUsername = "";
        username.style.border = "2px solid green";
    }

    if (password.value.trim() === "") {
        errorMsgPassword = "password can not blank";
        password.style.border = "2px solid red";
    }
    else {
        errorMsgPassword = "";
        password.style.border = "2px solid green";

    }
    $('.error-username').html(errorMsgUsername);
    $('.error-password').html(errorMsgPassword);



});

