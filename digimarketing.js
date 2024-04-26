document.getElementById("contactForm").addEventListener("submit",
function(event) {

    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    alert(`Thank you, ${name}! Your message has been sent.`);
    event.target.reset();
});