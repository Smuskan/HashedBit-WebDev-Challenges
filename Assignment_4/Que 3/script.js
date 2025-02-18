// Function to toggle visibility of the paragraph
function toggleVisibility() {
    let para = document.getElementById("useless-paragraph");

    // Check if the paragraph is currently visible
    if (para.style.display === "none") {
        para.style.display = "block"; // Show the paragraph
    } else {
        para.style.display = "none"; // Hide the paragraph
    }
}