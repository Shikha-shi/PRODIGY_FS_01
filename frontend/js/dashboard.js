const API_URL = "http://127.0.0.1:8000";

const token = localStorage.getItem("access_token");


// ==========================================
// CHECK LOGIN
// ==========================================

if (!token) {
    window.location.href = "index.html";
}


// ==========================================
// LOAD USER DATA
// ==========================================

async function loadUser() {

    try {

        const response = await fetch(
            `${API_URL}/auth/me`,
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );


        // Token invalid / expired
        if (!response.ok) {

            localStorage.removeItem("access_token");

            window.location.href = "index.html";

            return;
        }


        const user = await response.json();

        console.log("Logged-in user:", user);


        // ==========================================
        // USER NAME
        // ==========================================

        const welcomeName =
            document.getElementById("userNameWelcome");

        const userName =
            document.getElementById("userName");

        const statName =
            document.getElementById("statName");


        if (welcomeName) {
            welcomeName.textContent = user.name;
        }

        if (userName) {
            userName.textContent = user.name;
        }

        if (statName) {
            statName.textContent = user.name;
        }


        // ==========================================
        // EMAIL
        // ==========================================

        const userEmail =
            document.getElementById("userEmail");

        if (userEmail) {
            userEmail.textContent = user.email;
        }


        // ==========================================
        // ROLE
        // ==========================================

        const userRole =
            document.getElementById("userRole");

        const statRole =
            document.getElementById("statRole");


        if (userRole) {
            userRole.textContent = user.role;
        }

        if (statRole) {
            statRole.textContent = user.role;
        }


        // ==========================================
        // STATUS
        // ==========================================

        const statusText =
            user.is_active ? "Active" : "Inactive";


        const userStatus =
            document.getElementById("userStatus");

        const statStatus =
            document.getElementById("statStatus");


        if (userStatus) {
            userStatus.textContent = statusText;
        }

        if (statStatus) {
            statStatus.textContent = statusText;
        }


        // ==========================================
        // ADMIN ACCESS
        // ==========================================

        if (user.role === "admin") {

            const adminButton =
                document.getElementById("adminButton");

            const adminSection =
                document.getElementById("adminSection");

            const adminNav =
                document.getElementById("adminNav");


            if (adminButton) {
                adminButton.style.display = "flex";
            }

            if (adminSection) {
                adminSection.style.display = "flex";
            }

            if (adminNav) {
                adminNav.style.display = "flex";
            }

        }


        // ==========================================
        // REMOVE LOADING MESSAGE
        // ==========================================

        const message =
            document.getElementById("message");

        if (message) {
            message.textContent = "";
        }

    }

    catch (error) {

        console.error(
            "Dashboard error:",
            error
        );

        const message =
            document.getElementById("message");

        if (message) {
            message.textContent =
                "Unable to connect to authentication server.";
        }

    }
}


// ==========================================
// START
// ==========================================

loadUser();


// ==========================================
// ADMIN BUTTON
// ==========================================

const adminButton =
    document.getElementById("adminButton");

if (adminButton) {

    adminButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "admin.html";

        }
    );

}


// ==========================================
// LOGOUT
// ==========================================

const logoutButton =
    document.getElementById("logoutButton");

if (logoutButton) {

    logoutButton.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "access_token"
            );

            window.location.href =
                "index.html";

        }
    );

}