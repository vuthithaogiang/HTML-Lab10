let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
email = id("email"),
password = id("password"),
form = id("form"),
errorMsg = classes("error"),
successIcon = classes("success-icon"),
failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannot be blank");
    formValidation();
    
    

});



let engine = (id, serial, message) => {
    if( id.value.trim() === ""){
        errorMsg[serial].innnerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
    else{
        errorMsg[serial].style.opacity= "0";
        successIcon[serial].style.opacity= "1";

    }
};

let formValidation = () => {
    if(username.value === "" || email.value === "" || password.value === "" ){
        console.log('failure');
    }
    else{
        console.log('success');
        accceptData();
       

    }
}



let data = [{}];

let accceptData = () => {
    data.push({
        username: username.value,
        email: email.value,
        password: password.value,

    });
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
    moveLogIn();
    
};

function moveLogIn() {
    location.replace("login.html");
}


