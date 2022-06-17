const first = document.querySelector(".first");
const first_name = document.querySelector(".first_name");

const last = document.querySelector(".last");
const last_name = document.querySelector(".last_name").value;

const email = document.querySelector(".email");
const user_email = document.querySelector(".user_email").value;

const password = document.querySelector(".password");
const user_password = document.querySelector(".user_password").value;

let btn = document.querySelector(".btn")

console.log(first_name.value.length())

// console.log(last_name)

// console.log(user_email)

// console.log(user_password)


btn.addEventListener("click", displayDate)

function displayDate(first_name) {
    if(first_name.value.length() == 0) {
        alert("empty")
    }

}