const loginBtn = document.getElementById("login-btn");
const signupBtn = document.getElementById("sign-up");

loginBtn.addEventListener("click", () => {

    if (loginBtn.textContent == "Log In") {
        return;
    }

    let loginPrompt = prompt("Enter your user.name")
    loginBtn.textContent = loginPrompt;
})