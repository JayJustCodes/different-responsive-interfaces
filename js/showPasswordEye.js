const passwordInput = document.querySelector('#connexion-form-password');
const eye = document.querySelector('.eye');

eye.addEventListener("click", showPassword);

function showPassword() {
    this.classList.toggle('eye-open')
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)
}