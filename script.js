// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back-to-Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = "↑";
backToTopButton.classList.add('back-to-top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Basic Form Validation (for contact form)
function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (message === "") {
        alert("Please enter a message.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}
// script.js
function changeReadMore() {
    const mycontent = document.getElementById('mybox1id');
    const mybutton =  document.getElementById('mybuttonid');

    if (mycontent.style.display === 'none' || mycontent.style.display === ' ') {
        mycontent.style.display = 'block';
        mybutton.textContent = 'Learn Less';
    } else {
        mycontent.style.display = 'none';
        mybutton.textContent = 'Learn More';
    }
}
