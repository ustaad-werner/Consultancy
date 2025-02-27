// JavaScript for Services Section Text Animation
document.addEventListener('DOMContentLoaded', function() {
    // Array of words to cycle through
    const words = [
        "Services",
        "Solutions",
        "Assistance",
        "Expertise",
        "Consultation",
        "Support"
    ];
    
    const changingText = document.getElementById('changing-text');
    let currentIndex = 0;
    
    // Function to update the text with a fade effect
    function updateText() {
        // Fade out
        changingText.style.opacity = 0;
        
        // Wait for fade out to complete before changing text
        setTimeout(() => {
            // Update text
            currentIndex = (currentIndex + 1) % words.length;
            changingText.textContent = words[currentIndex];
            
            // Fade in
            changingText.style.opacity = 1;
        }, 500);
    }
    
    // Set initial text
    changingText.textContent = words[currentIndex];
    changingText.style.transition = 'opacity 0.5s ease';
    
    // Start the interval to change text every 3 seconds
    setInterval(updateText, 3000);
    
    // Add smooth scrolling for "Learn More" links
    document.querySelectorAll('.learn-more').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});