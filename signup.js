document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate the inputs
    if (name === "" || email === "" || password === "") {
        alert("All fields are required.");
        return;
    }

    // Store the data in localStorage
    const userData = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect to login page after successful signup
    alert("Sign Up Successful! Please log in.");
    window.location.href = "login.html";
});
