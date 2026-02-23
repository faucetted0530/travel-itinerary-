document.getElementById("loginForm")?.addEventListener("submit", function(e) {
    e.preventDefault();

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    fetch("users.json")
        .then(response => response.json())
        .then(data => {
            const user = data.users.find(u =>
                u.username === usernameInput &&
                u.password === passwordInput
            );

            if (user) {
                localStorage.setItem("loggedInUser", JSON.stringify(user));
                window.location.href = "dashboard.html";
            } else {
                errorMessage.textContent = "Invalid username or password.";
            }
        })
        .catch(error => {
            console.error("Error loading users:", error);
        });
});