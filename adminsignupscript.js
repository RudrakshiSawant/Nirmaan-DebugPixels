import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signup-btn");

    if (signupBtn) {
        signupBtn.addEventListener("click", async (event) => {
            event.preventDefault();  // Prevent accidental form submission

            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Signup successful! Redirecting to login...");
                window.location.href = "loginadmin.html"; // Redirect to login page
            } catch (error) {
                alert("Error: " + error.message);
            }
        });
    }


});
