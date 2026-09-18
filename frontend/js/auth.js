const API_URL = "http://127.0.0.1:8000";


const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

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
                message.textContent = data.detail || "Login failed";
                return;
            }

            localStorage.setItem(
                "access_token",
                data.access_token
            );

            message.textContent = "Login successful!";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 500);

        } catch (error) {

            message.textContent =
                "Unable to connect to the server.";

            console.error(error);
        }
    });
}


const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const message = document.getElementById("message");

        try {

            const response = await fetch(`${API_URL}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    password: password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                message.textContent =
                    data.detail || "Registration failed";
                return;
            }

            message.textContent =
                "Account created successfully!";

            registerForm.reset();

        } catch (error) {

            message.textContent =
                "Unable to connect to the server.";

            console.error(error);
        }
    });
}