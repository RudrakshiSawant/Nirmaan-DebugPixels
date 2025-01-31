import { auth } from "./firebaseConfig.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login-btn");

    if (loginBtn) {
        loginBtn.addEventListener("click", async (event) => {
            event.preventDefault();  // Prevent form submission and page refresh

            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const errorMessage = document.getElementById("error-message");

            // Validate inputs
            if (!email || !password) {
                errorMessage.textContent = "Please enter both email and password.";
                errorMessage.style.display = "block";
                return;
            }

            try {
                // Attempt to sign in with provided credentials
                const userCredential = await signInWithEmailAndPassword(auth, email, password);

                // Log the user data to check
                console.log(userCredential); // This helps to verify the login credentials are correct

                // Redirect to canteen-admin.html after login is successful
                window.location.href = "canteen-admin.html";  // Redirect to the admin dashboard page

            } catch (error) {
                // Display error message if login fails
                errorMessage.textContent = "Invalid email or password";
                errorMessage.style.display = "block";
            }
        });
    }
});
