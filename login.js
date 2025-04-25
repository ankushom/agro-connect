document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Check if user exists and if the email and password match
    if (storedUser && storedUser.email === email && storedUser.password === password) {
        // Redirect to home page on successful login
        alert("Login Successful!");
        window.location.href = "index.html"; // Redirect to home page
    } else {
        // If credentials do not match
        alert("Invalid email or password. Please try again.");
    }
});
