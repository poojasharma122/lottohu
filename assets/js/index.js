document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector(".menu-toggle-btn");
    const closeBtn = document.querySelector(".menu-close-btn");
    const navMenu = document.querySelector(".navigation-menu");

    // Open Menu
    toggleBtn.addEventListener("click", function () {
        navMenu.classList.add("active");
    });

    // Close Menu
    closeBtn.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

    // Optional: Close when clicking a menu link
    document.querySelectorAll(".navigation-menu ul li a").forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 1399) {
                navMenu.classList.remove("active");
            }
        });
    });
});




// Loader JS Start
window.addEventListener('load', function () {
    document.getElementById('loader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});
// Loader JS Start
