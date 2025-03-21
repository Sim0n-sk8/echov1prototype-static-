// Light/Dark Mode Toggle
const themeSlider = document.getElementById("themeSlider");
const body = document.body;

// Check localStorage for theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light-mode") {
    body.classList.add("light-mode");
    themeSlider.checked = true;
}

themeSlider.addEventListener("change", () => {
    body.classList.toggle("light-mode");
    // Save theme preference to localStorage
    if (body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode");
    } else {
        localStorage.setItem("theme", "dark-mode");
    }
});

// Signup Form Submission
document.getElementById("signUpForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("usernameSignUp").value;
    const email = document.getElementById("emailSignUp").value;
    const password = document.getElementById("passwordSignUp").value;
    const confirmPassword = document.getElementById("confirmPasswordSignUp").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (username && email && password && confirmPassword) {
        // Save user data to localStorage
        const userData = {
            username: username,
            email: email,
            password: password,
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        console.log("Sign Up - Username:", username, "Email:", email, "Password:", password);
        alert("Sign Up Successful! You can now sign in.");

        // Clear the form
        document.getElementById("signUpForm").reset();
    } else {
        alert("Please fill in all fields.");
    }
});

// Login Form Submission
document.getElementById("signInForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("emailSignIn").value;
    const password = document.getElementById("passwordSignIn").value;

    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (!userData) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (email === userData.email && password === userData.password) {
        console.log("Sign In - Email:", email, "Password:", password);
        alert("Sign In Successful! Redirecting...");

        // Save username to localStorage for display on the home page
        localStorage.setItem("username", userData.username);

        // Redirect to index.html
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password.");
    }
});

// Display Username on Home Page
const usernameDisplay = document.getElementById("usernameDisplay");
if (usernameDisplay) {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
        usernameDisplay.textContent = savedUsername;
    } else {
        usernameDisplay.textContent = "Guest";
    }
}