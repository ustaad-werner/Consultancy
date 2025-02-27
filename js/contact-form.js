// form-handling

   // Initialize EmailJS
   (function() {
    emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your public key
})();

// Form handling
const form = document.getElementById('contactForm');
const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    message: document.getElementById('message')
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    try {
        await emailjs.sendForm(
            'YOUR_SERVICE_ID', // Replace with your service ID
            'YOUR_TEMPLATE_ID', // Replace with your template ID
            e.target
        );
        
        alert('Message Sent!');
        form.reset();
    } catch (error) {
        alert('Oops! Something went wrong. Please try again.');
    }
});