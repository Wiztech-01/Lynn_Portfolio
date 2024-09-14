// PAGE SMOOTH SROLL
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    let index = sections.length; // Start from the end of the sections

    while (--index && window.scrollY + 60 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove('active'));
    navLinks[index].classList.add('active');

    sections.forEach((section, i) => {
        section.classList.remove('fade-out');
        if (i !== index) {
            section.classList.add('fade-out');
        }
        
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // Call once on page load




// CONTACT FORM

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formMessage = document.getElementById('formMessage');

    // Clear previous messages
    formMessage.textContent = '';

    // Example validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = 'All fields are required.';
        return;
    }

    // Submit the form (replace with your server endpoint)
    fetch('YOUR_SERVER_ENDPOINT', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    })
    .then(response => {
        if (response.ok) {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.color = 'green';
            document.getElementById('contactForm').reset();
        } else {
            formMessage.textContent = 'Error sending message. Please try again later.';
        }
    })
    .catch(() => {
        formMessage.textContent = 'Error sending message. Please try again later.';
    });
});
