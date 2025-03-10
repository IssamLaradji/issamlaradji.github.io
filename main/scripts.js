document.addEventListener('DOMContentLoaded', function() {
    // Remove active class from all links first
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

function scrollToContact(event) {
    event.preventDefault();
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
} 

function scrollToResearch(event) {
    event.preventDefault();
    document.querySelector('.research-section').scrollIntoView({
        behavior: 'smooth'
    });
} 