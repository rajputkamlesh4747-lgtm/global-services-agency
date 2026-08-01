document.addEventListener("DOMContentLoaded", () => {
    console.log("Global Services Agency Loaded");

    const button = document.querySelector(".hero a");

    button.addEventListener("click", (e) => {
        e.preventDefault();
        alert("Welcome to Global Services Agency! More features are coming soon.");
    });
});
