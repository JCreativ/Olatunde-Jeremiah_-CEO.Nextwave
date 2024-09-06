document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

  
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start' 
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


const toggleDarkModeButton = document.createElement('button');
toggleDarkModeButton.textContent = 'Switch Modes';
toggleDarkModeButton.style.position = 'fixed';
toggleDarkModeButton.style.top = '20px';
toggleDarkModeButton.style.right = '20px';
toggleDarkModeButton.style.zIndex = '1000';
toggleDarkModeButton.style.padding = '10px';
toggleDarkModeButton.style.cursor = 'pointer';
document.body.appendChild(toggleDarkModeButton);

toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


document.getElementById('send-message').addEventListener('click', () => {
    const messageInput = document.getElementById('message');
    const messageOutput = document.getElementById('message-output');

   
    if (messageInput.value.trim() !== '') {
       
        const newMessage = document.createElement('div');
        newMessage.textContent = messageInput.value;
        newMessage.classList.add('user-message');

       
        messageOutput.appendChild(newMessage);
        messageInput.value = ''; 
    } else {
        alert('Please type a message before sending.'); 
    }
});






const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            entry.target.classList.remove('fade-out');
        } else {
            entry.target.classList.remove('fade-in');
            entry.target.classList.add('fade-out');
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the section is visible
});

// Apply the observer to each section
sections.forEach(section => {
    observer.observe(section);
});







// Function to handle the fading effect on scroll
function handleScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop <= windowHeight * 0.75 && sectionTop >= windowHeight * -0.25) {
            section.classList.add('fade-in');
            section.classList.remove('fade-out');
        } else {
            section.classList.remove('fade-in');
            section.classList.add('fade-out');
        }
    });
}

// Apply fading effect when the page is scrolled
window.addEventListener('scroll', handleScroll);

// Smooth scrolling and fade-in when links are clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Trigger the fade-in effect immediately
        setTimeout(() => {
            targetSection.classList.add('fade-in');
        }, 500); // Adjust the delay if needed
    });
});