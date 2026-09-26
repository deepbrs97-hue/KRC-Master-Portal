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

            "Bulk trips details",
            "Bulk trips payment",
            "Pack truck DDR",
            "Bulk Doc",
            "Indant management system",
            "TYRE Management system",
            "Vehicle maintenance system",
            "Accident details"
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
            "Pack truck Doc",

            "Pack truck Diesel details",
            "Pack truck trips details",
            "Pack truck trips payment & bulk trips, diesel details",
            "Accident details",
            "TYRE Management system",
            "Vehicle maintenance system",
            "Angul Trips & Diesel details"
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
            "Pack truck Doc",

            "Pack truck trips payment"
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
    },

    Breakdown: {
        password: "56789",
        role: "user",
        pages: [
            "Vehicle maintenance system",
            "TYRE Management system",
            "Pack truck Doc",
            "Bulk Doc",
            "Accident details",
            "DOC PDF",
            "Indant management system",
            "Leave",
            "Diesel Issue"
        ]
    },

    Indant: {
        password: "34567",
        role: "user",
        pages: [
            "Indant management system",
            "TYRE Management system",
            "Pack truck Doc",
            "Bulk Doc",
            "Accident details",
            "DOC PDF",
            "Leave"
        ]
    }

};


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const username =
            document.getElementById("username").value.trim();

        const password =
            document.getElementById("password").value;

        const rememberMe =
            document.getElementById("rememberMe")?.checked;

        const user = users[username];

        if (user && user.password === password) {

            sessionStorage.setItem(
                "loggedInUser",
                username
            );

            sessionStorage.setItem(
                "userRole",
                user.role
            );

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

            if (rememberMe) {

                localStorage.setItem(
                    "rememberedUsername",
                    username
                );

            } else {

                localStorage.removeItem(
                    "rememberedUsername"
                );
            }

            message.textContent = "Login successful.";
            message.style.color = "#15803d";

            setTimeout(function () {

                window.location.href =
                    "src/dashboard.html";

            }, 500);

        } else {

            message.textContent =
                "Invalid username or password.";

            message.style.color = "#dc2626";
        }

    });


    // Remember username
    const rememberedUsername =
        localStorage.getItem("rememberedUsername");

    if (rememberedUsername) {

        const usernameInput =
            document.getElementById("username");

        if (usernameInput) {

            usernameInput.value =
                rememberedUsername;

            document.getElementById(
                "rememberMe"
            ).checked = true;
        }
    }
}
