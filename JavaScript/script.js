let lead_button1 = document.getElementById("main-page");
lead_button1.addEventListener("click",scrollToBottom);
let lead_button2 = document.getElementById("lb-page-1");
lead_button2.addEventListener("click",scrollToBottom);

function scrollToBottom(){
    window.scrollTo({
        
        top: document.body.scrollHeight, // Scroll to the end of the document
        behavior: 'smooth' // Makes the scrolling smooth
    });
    // console.log("clicked");
}

let button_ourservice = document.getElementById("ourservice");
button_ourservice.addEventListener("click",changePageToService);
function changePageToService(){
    window.location.href = "Our_Services.html";
}

let button_philosophy = document.getElementById("philosophy");
button_philosophy.addEventListener("click",changePageToPhilosophy);
function changePageToPhilosophy(){
    window.location.href = "Philosophy.html";
}

let button_aboutsavs = document.getElementById("about-savs");
button_aboutsavs.addEventListener("click",changePageToAbout);
function changePageToAbout(){
    window.location.href = "About_savs.html";
}

let button_contactus = document.getElementById("contact-us");
button_contactus.addEventListener("click",changePageToContacts);
function changePageToContacts(){
    window.location.href = "Contact_Us.html";
}