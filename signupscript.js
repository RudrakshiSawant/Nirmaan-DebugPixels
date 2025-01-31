import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", async (event) => {
            event.preventDefault();  // Prevent default form submission

            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                // Create user with email and password
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                
                // Log the user data to check
                console.log(userCredential);
                
                alert("Signup successful! Redirecting to login...");
                window.location.href = "login.html"; // Redirect to login page

            } catch (error) {
                // Handle specific errors
                console.error(error);  // Log the error to console
                alert("Error: " + error.message);
            }
        });
    }
});
