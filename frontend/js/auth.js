const API_URL = "http://127.0.0.1:8000";


// =========================
// LOGIN
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        const message = document.getElementById("message");

        if (!email || !password) {
            message.textContent = "Please enter email and password.";
            return;
        }

        message.textContent = "Logging in...";

        try {

            const response = await fetch(`${API_URL}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                message.textContent =
                    data.detail || "Login failed.";
                return;
            }

            // Save JWT token
            localStorage.setItem(
                "access_token",
                data.access_token
            );

            message.textContent = "Login successful!";

            // Move to dashboard
            window.location.href = "dashboard.html";

        } catch (error) {

            console.error(error);

            message.textContent =
                "Unable to connect to server.";
        }
    });
}


// =========================
// REGISTER
// =========================

const registerForm =
    document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value;

        const message =
            document.getElementById("message");

        if (!name || !email || !password) {

            message.textContent =
                "Please fill in all fields.";

            return;
        }

        message.textContent =
            "Creating your account...";

        try {

            const response = await fetch(
                `${API_URL}/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                }
            );

            const data = await response.json();

            if (!response.ok) {

                message.textContent =
                    data.detail || "Registration failed.";

                return;
            }

            message.textContent =
                "Registration successful! Redirecting...";

            // Move to login page
            setTimeout(function () {
                window.location.href = "index.html";
            }, 1000);

        } catch (error) {

            console.error(error);

            message.textContent =
                "Unable to connect to server.";
        }
    });
}


// =========================
// PASSWORD VISIBILITY
// =========================

// Login password
const togglePassword =
    document.getElementById("togglePassword");

if (togglePassword) {

    togglePassword.addEventListener("click", function () {

        const password =
            document.getElementById("password");

        if (password.type === "password") {

            password.type = "text";

            this.innerHTML =
                '<i data-lucide="eye-off"></i>';

        } else {

            password.type = "password";

            this.innerHTML =
                '<i data-lucide="eye"></i>';
        }

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    });
}


// Register password
const toggleRegisterPassword =
    document.getElementById("toggleRegisterPassword");

if (toggleRegisterPassword) {

    toggleRegisterPassword.addEventListener("click", function () {

        const password =
            document.getElementById("password");

        if (password.type === "password") {

            password.type = "text";

            this.innerHTML =
                '<i data-lucide="eye-off"></i>';

        } else {

            password.type = "password";

            this.innerHTML =
                '<i data-lucide="eye"></i>';
        }

        if (typeof lucide !== "undefined") {
            lucide.createIcons();
        }
    });
}