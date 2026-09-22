const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

const users = {
    admin: {
        password: "Welcome",
        role: "admin",
        pages: "all"
    },

    Angul: {
        password: "12345",
        role: "user",
        pages: [
            "DOC PDF",
            "Pack truck Doc",
            "Driver details",
            "Leave",
            "Angul DDR"
        ]
    },

    Driver: {
        password: "23456",
        role: "user",
        pages: [
            "DOC PDF",
            "Bulk Doc",
            "Pack truck Doc",
            "Driver details",
            "Leave"
        ]
    },

    Challan: {
        password: "34567",
        role: "user",
        pages: [
            "Challan Details",
            "DOC PDF",
            "Bulk Doc",
            "Pack truck Doc",
            "Leave"
        ]
    },

    HR: {
        password: "23456",
        role: "user",
        pages: [
            "Indant",
            "DOC PDF",
            "Bulk Doc",
            "Pack truck Doc",
            "HR",
            "Breakdown details",
            "Pack truck trips details",
            "Bulk trips details"
        ]
    },

    Accounts: {
        password: "45678",
        role: "user",
        pages: [
            "Indant",
            "DOC PDF",
            "Leave",
            "Bulk Doc",
            "Pack truck Doc"
        ]
    },

    "TYRE Management": {
        password: "12345",
        role: "user",
        pages: [
            "TYRE Management system",
            "DOC PDF",
            "Leave",
            "Bulk Doc",
            "Pack truck Doc",
            "Indant"
        ]
    },

    Bullet: {
        password: "23456",
        role: "user",
        pages: [
            "Bulk Doc",
            "Breakdown details",
            "TYRE Management system",
            "Indant",
            "Driver details",
            "Accident details",
            "DOC PDF",
            "Challan Details",
            "Leave",
            "Payment",
            "Bulk trips details"
        ]
    },

    Pack: {
        password: "45678",
        role: "user",
        pages: [
            "Trips details",
            "Breakdown details",
            "TYRE Management system",
            "Indant",
            "Driver details",
            "Accident details",
            "DOC PDF",
            "Challan Details",
            "Leave",
            "Pack truck Doc"
        ]
    },

    Accident: {
        password: "23456",
        role: "user",
        pages: [
            "Accident details",
            "DOC PDF",
            "Challan Details",
            "Leave",
            "Indant"
        ]
    }
};


loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const user = users[username];

    if (user && user.password === password) {

        // Save logged-in user information
        sessionStorage.setItem("loggedInUser", username);
        sessionStorage.setItem("userRole", user.role);

        if (user.role === "admin") {

            sessionStorage.setItem(
                "userPages",
                JSON.stringify(["all"])
            );

        } else {

            sessionStorage.setItem(
                "userPages",
                JSON.stringify(user.pages)
            );
        }

        message.textContent = "Login successful.";
        message.style.color = "#15803d";

        setTimeout(() => {

            window.location.href = "src/dashboard.html";

        }, 500);

    } else {

        message.textContent =
            "Invalid username or password.";

        message.style.color = "#dc2626";
    }
});