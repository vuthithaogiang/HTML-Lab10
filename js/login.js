
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username");
let password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (username.value.trim() === "") {
        errorMsg = "username can not blank";
        username.style.border = "2px solid red";

        $('.error-username').html(errorMsg);


    }
    else {

        username.style.border = "2px solid green";
    }

    if (password.value.trim() === "") {
        errorMsg = "password can not blank";
        password.style.border = "2px solid red";

        $('.error-password').html(errorMsg);


    }
    else {
        password.style.border = "2px solid green";

    }

});

