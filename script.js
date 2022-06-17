const first_name = document.querySelector(".first_name");
const first = document.querySelector(".first");

const last_name = document.querySelector(".last_name").value;
// const last = document.querySelector(".last");

const user_email = document.querySelector(".user_email").value;
// const email = document.querySelector(".email");

const user_password = document.querySelector(".user_password").value;
// const password = document.querySelector(".password");

let btn = document.querySelector(".btn")

// console.log(first_name.value == "")

// user_email.addEventListener("keyup", function (event) {
//     if (user_email.validity.typeMismatch) {
//       user_email.setCustomValidity("I expect an e-mail, darling!");
//     } else {
//       user_email.setCustomValidity("");
//     }
//   })



btn.addEventListener("click", displayDate)

function displayDate() {

    // setTimeout(() => {
        if(first_name.value == "") {
    
            const msg = first.innerHTML = "First Name cannot be empty";
            console.log(msg)
            // alert("hello")
        }

    // }, 3000)
    
}