// Scroll to bottom functionality
let lead_button1 = document.getElementById("main-page");
let lead_button2 = document.getElementById("lb-page-1");

// Ensure buttons exist before adding event listeners
if (lead_button1) {
    lead_button1.addEventListener("click", scrollToBottom);
}
if (lead_button2) {
    lead_button2.addEventListener("click", scrollToBottom);
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight, // Scroll to the end of the document
        behavior: 'smooth' // Makes the scrolling smooth
    });
}