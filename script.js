


let btn = document.querySelector(".btn")


btn.addEventListener("click", displayDate)

function displayDate() {
    const first_name = document.querySelector(".first_name");
    const first = document.querySelector(".first");
    first.classList.add("first");

    const error1 = document.querySelector(".error1")
    error1.classList.add("error1")


    const last_name = document.querySelector(".last_name");
    const last = document.querySelector(".last");
    last.classList.add("first")

    const error2 = document.querySelector(".error2")
    error2.classList.add("error2")
    

    const user_email = document.querySelector(".user_email");
    const email = document.querySelector(".email");
    email.classList.add("first")

    const error3 = document.querySelector(".error3")
    error3.classList.add("error3")

      
    const user_password = document.querySelector(".user_password");
    const password = document.querySelector(".password");
    password.classList.add("first")

    const error4 = document.querySelector(".error4")
    error4.classList.add("error4")

    
    if(first_name.value == "") {
        error1.style.display = "block";
        document.getElementsByName("firstname")[0].placeholder = "";

        first.innerHTML = "First Name cannot be empty";
    }
    
    if(last_name.value == "") {
        error2.style.display = "block";
        document.getElementsByName("lastname")[0].placeholder = "";
        
        last.innerHTML =   "Last Name cannot be empty";
    }
    
    if(user_email.value == "") {
        error3.style.display = "block";
        
        const text = "email@example/com";

        document.getElementsByName("email")[0].placeholder = text;

        email.innerHTML =   "Looks like this is not an email";
    }


    if(user_password.value == "") {
        error4.style.display = "block";
        document.getElementsByName("password")[0].placeholder = "";

        password.innerHTML =   "Password cannot be empty";
    }    
}