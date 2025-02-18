document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Add hover effect for content boxes
    document.querySelectorAll(".content-box").forEach(box => {
        box.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s";
        });
        box.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Dynamic year update in footer
    document.querySelector("footer p").innerHTML = `&copy; ${new Date().getFullYear()} Travel and Destination Guide. All rights reserved.`;
});