


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

    const user_password = document.querySelector(".user_password");
    const password = document.querySelector(".password");
    password.classList.add("first")

    const error3 = document.querySelector(".error3")
    error3.classList.add("error3")


    if(first_name.value == "") {
            error1.style.display = "block";

            first.innerHTML = "First Name cannot be empty";
    }

    if(last_name.value == "") {
        error2.style.display = "block";

        last.innerHTML =   "Last Name cannot be empty";
    }

    // if(user_email.value == "") {

    //     email.innerHTML =   "Last Name cannot be empty";
    // }

    if(user_password.value == "") {
        error3.style.display = "block";

        password.innerHTML =   "Password cannot be empty";
    }    
}