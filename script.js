document.addEventListener("DOMContentLoaded", function () {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    if (username) {
        username.addEventListener("input", function () {
            clearError(username, "usernameError");
        });
    }

    if (email) {
        email.addEventListener("input", function () {
            clearError(email, "emailError");
        });
    }

    if (password) {
        password.addEventListener("input", function () {
            clearError(password, "passwordError");
        });
    }

    if (terms) {
        terms.addEventListener("change", function () {
            document.getElementById("termsError").textContent = "";
        });
    }
});

function clearError(input, errorId) {
    const error = document.getElementById(errorId);

    if (error) {
        error.textContent = "";
    }

    if (input && input.parentElement) {
        input.parentElement.classList.remove("input-error");
    }
}

function register() {
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const terms = document.getElementById("terms");

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const termsError = document.getElementById("termsError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    termsError.textContent = "";

    username.parentElement.classList.remove("input-error");
    email.parentElement.classList.remove("input-error");
    password.parentElement.classList.remove("input-error");

    let isValid = true;

    if (username.value.trim() === "") {
        usernameError.textContent = "Username wajib diisi";
        username.parentElement.classList.add("input-error");
        isValid = false;
    } else if (username.value.trim().length < 5) {
        usernameError.textContent = "Username minimal 5 karakter";
        username.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (email.value.trim() === "") {
        emailError.textContent = "Email wajib diisi";
        email.parentElement.classList.add("input-error");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = "Format email tidak valid";
        email.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password wajib diisi";
        password.parentElement.classList.add("input-error");
        isValid = false;
    } else if (password.value.trim().length < 8) {
        passwordError.textContent = "Password minimal 8 karakter";
        password.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (!terms.checked) {
        termsError.textContent = "Kamu harus menyetujui syarat dan ketentuan";
        isValid = false;
    }

    if (!isValid) return;

    localStorage.setItem("isRegister", "true");
    localStorage.setItem("username", username.value.trim());
    localStorage.setItem("userEmail", email.value.trim());
    localStorage.setItem("userPassword", password.value.trim());

    window.location.href = "../HomeScreen/Home.html";
}

function login() {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    emailError.textContent = "";
    passwordError.textContent = "";

    email.parentElement.classList.remove("input-error");
    password.parentElement.classList.remove("input-error");

    let isValid = true;

    if (email.value.trim() === "") {
        emailError.textContent = "Email wajib diisi";
        email.parentElement.classList.add("input-error");
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        emailError.textContent = "Format email tidak valid";
        email.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (password.value.trim() === "") {
        passwordError.textContent = "Password wajib diisi";
        password.parentElement.classList.add("input-error");
        isValid = false;
    } else if (password.value.trim().length < 8) {
        passwordError.textContent = "Password minimal 8 karakter";
        password.parentElement.classList.add("input-error");
        isValid = false;
    }

    if (!isValid) return;

    window.location.href = "../HomeScreen/Home.html";
}
const menuItems = document.querySelectorAll(".menu a");
const startBtn = document.getElementById("startBtn");

menuItems.forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault();

        menuItems.forEach(menu => {
            menu.classList.remove("active");
        });

        this.classList.add("active");
    });
});

startBtn.addEventListener("click", function () {
    alert("Simulasi Tes Bakat dimulai!");
});