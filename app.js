document.addEventListener('DOMContentLoaded', () => {
    // Fetch stored users from localStorage
    let storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Display data on home page
    if (document.getElementById("tbody")) {
        displayData();
    }

    // Login form handling
    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            let user = storedUsers.find(user => user.email === email && user.password === password);
            if (user) {
                alert("Login Successful!");
                window.location.href = 'home.html';
            } else {
                alert("Invalid email or password!");
            }
        });
    }

    // Signup form handling
    if (document.getElementById("signupForm")) {
        document.getElementById("signupForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const gender = document.getElementById("gender").value;
            const state = document.getElementById("state").value;
            const city = document.getElementById("city").value;
            const address = document.getElementById("address").value;
            const password = document.getElementById("password").value;

            let newUser = { name, email, gender, state, city, address, password };
            storedUsers.unshift(newUser);
            localStorage.setItem("users", JSON.stringify(storedUsers));
            alert("User registered successfully!");
            window.location.href = 'login.html';
        });
    }

    // Function to display data in the table
    function displayData() {
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = "";
        storedUsers.map((user, index) => {
            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.gender}</td>
                    <td>${user.state}</td>
                    <td>${user.city}</td>
                    <td>${user.address}</td>
                </tr>`;
        });
    }
});
