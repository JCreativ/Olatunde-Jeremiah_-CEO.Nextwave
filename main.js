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