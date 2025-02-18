// Change text color based on input
document.getElementById("colorchange").addEventListener("click", function() {
   let color = document.getElementById("colorbox").value;
   document.getElementById("text-container").style.color = color;
});

// Change font size using the slider
document.getElementById("fontsize").addEventListener("input", function() {
   let size = this.value + "px";
   document.getElementById("text-container").style.fontSize = size;
});

// Toggle Italic style
document.getElementById("italic").addEventListener("click", function() {
   let text = document.getElementById("text-container");
   text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
});

// Toggle Underline style
document.getElementById("underline").addEventListener("click", function() {
   let text = document.getElementById("text-container");
   text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
});

// Toggle Bold style
document.getElementById("bold").addEventListener("click", function() {
   let text = document.getElementById("text-container");
   text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
});

// Change font family using dropdown
document.getElementById("list").addEventListener("change", function() {
   let fontFamily = this.value;
   document.getElementById("text-container").style.fontFamily = fontFamily;
});

// Get and display current CSS properties
document.getElementById("getstyle").addEventListener("click", function() {
   let text = document.getElementById("text-container");
   let styles = window.getComputedStyle(text);

   let cssProps = `
       color: ${styles.color};
       font-size: ${styles.fontSize};
       font-family: ${styles.fontFamily};
       font-style: ${styles.fontStyle};
       font-weight: ${styles.fontWeight};
       text-decoration: ${styles.textDecoration};
   `;

   document.getElementById("css-props").textContent = cssProps.replace(/\s+/g, ' ').trim();
});
