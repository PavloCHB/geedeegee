let singupBtn = document.getElementById("singupbtn")
let loginBtn = document.getElementById("loginbtn")
let mainBtns = document.getElementById("main-login-buttons")
let singupForm = document.getElementById("singup-form")
let loginForm = document.getElementById("login-form")
let h2 = document.getElementById("h2")
let alreadyRegistered = document.getElementById("already-registered")
let notRegistered = document.getElementById("not-registered")
let eye = document.getElementById("show-hide-pass")
let passwords = document.querySelectorAll("input")

function goToSingUp(){
    mainBtns.classList.add("d-none");
    h2.classList.add("d-none");
    loginForm.classList.add("d-none");
    singupForm.classList.remove("d-none");
}
function goToLogIn(){
    mainBtns.classList.add("d-none");
    h2.classList.add("d-none");
    singupForm.classList.add("d-none");
    loginForm.classList.remove("d-none");
}

singupBtn.addEventListener("click", goToSingUp)
notRegistered.addEventListener("click", goToSingUp)
alreadyRegistered.addEventListener("click", goToLogIn)
loginBtn.addEventListener("click", goToLogIn)

// eye.addEventListener("click", function(){
//     p.preventDefault();
//     passwords.forEach(p => function(p){
//         let booleanPass = p.getAttribute("type")
//     })
// })