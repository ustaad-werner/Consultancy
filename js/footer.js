
    
// <!-- Optional JavaScript for enhanced functionality -->

    // Newsletter form submission
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            // Simulate form submission
            console.log('Subscribing email:', email);
            
            // Show success message
            const button = this.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Subscribed!';
            
            // Reset the form
            this.reset();
            
            // Restore button text after a delay
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        }
    });