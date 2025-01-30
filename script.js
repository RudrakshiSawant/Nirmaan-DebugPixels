import { auth } from "./firebaseConfig.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Ensure buttons exist before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    const signupBtn = document.getElementById("signup-btn");
    const loginBtn = document.getElementById("login-btn");

    if (signupBtn) {
        signupBtn.addEventListener("click", async () => {
            const email = document.getElementById("signup-email").value;
            const password = document.getElementById("signup-password").value;

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                await createUserWithEmailAndPassword(auth, email, password);
                alert("Signup successful! Redirecting...");
                window.location.href = "login.html";
            } catch (error) {
                alert("Error: " + error.message);
            }
        });
    }

    if (loginBtn) {
        loginBtn.addEventListener("click", async () => {
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;

            if (!email || !password) {
                alert("Please enter both email and password.");
                return;
            }

            try {
                await signInWithEmailAndPassword(auth, email, password);
                alert("Login successful! Redirecting...");
                window.location.href = "dashboard.html";
            } catch (error) {
                alert("Error: " + error.message);
            }
        });
    }
});
