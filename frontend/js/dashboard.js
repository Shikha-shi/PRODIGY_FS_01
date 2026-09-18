const API_URL = "http://127.0.0.1:8000";

const token = localStorage.getItem("access_token");


// No token → go back to login
if (!token) {
    window.location.href = "index.html";
}


// Get current user
async function loadUser() {

    try {

        const response = await fetch(`${API_URL}/auth/me`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {

            localStorage.removeItem("access_token");
            window.location.href = "index.html";

            return;
        }

        const user = await response.json();

        document.getElementById("userName").textContent =
            user.name;

        document.getElementById("userEmail").textContent =
            user.email;

        document.getElementById("userRole").textContent =
            user.role;

        document.getElementById("userStatus").textContent =
            user.is_active ? "Active" : "Inactive";

        // Show admin button only to admins
        if (user.role !== "admin") {
            document.getElementById("adminButton").style.display =
                "none";
        }

    } catch (error) {

        console.error(error);

        document.getElementById("message").textContent =
            "Unable to connect to server.";
    }
}


loadUser();


// Admin button
document.getElementById("adminButton").addEventListener(
    "click",
    function () {
        window.location.href = "admin.html";
    }
);


// Logout
document.getElementById("logoutButton").addEventListener(
    "click",
    function () {

        localStorage.removeItem("access_token");

        window.location.href = "index.html";
    }
);