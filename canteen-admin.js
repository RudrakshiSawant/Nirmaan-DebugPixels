import { db } from "./firebaseConfig.js";
import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", () => {
    const menuForm = document.getElementById("menu-form");
    const dishNameInput = document.getElementById("dish-name");
    const dishPriceInput = document.getElementById("dish-price");
    const menuItemsList = document.getElementById("menu-items");

    // Add a new dish to the Firestore
    menuForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const dishName = dishNameInput.value.trim();
        const dishPrice = parseFloat(dishPriceInput.value.trim());
        
        if (!dishName || isNaN(dishPrice)) {
            alert("Please enter a valid dish name and price.");
            return;
        }

        try {
            // Add dish to Firestore
            await addDoc(collection(db, "menu"), {
                name: dishName,
                price: dishPrice,
            });
            alert("Dish added successfully!");
            dishNameInput.value = '';
            dishPriceInput.value = '';
            loadMenuItems(); // Refresh the list after adding a new dish
        } catch (error) {
            alert("Error adding dish: " + error.message);
        }
    });

    // Fetch and display the menu items from Firestore
    async function loadMenuItems() {
        try {
            const querySnapshot = await getDocs(collection(db, "menu"));
            menuItemsList.innerHTML = ''; // Clear current list
            
            querySnapshot.forEach(doc => {
                const dish = doc.data();
                const listItem = document.createElement("li");
                listItem.textContent = `${dish.name} - $${dish.price.toFixed(2)}`;
                menuItemsList.appendChild(listItem);
            });
        } catch (error) {
            console.error("Error loading menu items: ", error);
        }
    }

    // Load menu items when the page loads
    loadMenuItems();
});
