//dynamic projects loading
// JavaScript for Projects Section
document.addEventListener('DOMContentLoaded', function() {
    // Dynamic creation of tech tags
    const techStacks = {
      'card1': ["React", "Node.js", "AWS", "Docker"],
      'card2': ["Python", "TensorFlow", "D3.js", "Flask"],
      'card3': ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      'card4': ["Socket.IO", "Express", "React", "Redis"]
    };
  
    // If you want to dynamically create the tech tags rather than having them in HTML
    // This is optional since we already included them in the HTML, but included here for completeness
    function populateTechTags() {
      const techTagContainers = document.querySelectorAll('.tech-tags');
      
      techTagContainers.forEach((container, index) => {
        // Clear existing tags if needed
        // container.innerHTML = '';
        
        // Get the appropriate tech stack for this card
        const cardKey = `card${index + 1}`;
        const techs = techStacks[cardKey];
        
        // Skip if we're not using this dynamic approach
        if (container.children.length > 0) return;
        
        // Create and append tags
        techs.forEach(tech => {
          const span = document.createElement('span');
          span.className = 'tech-tag';
          span.textContent = tech;
          container.appendChild(span);
        });
      });
    }
  
    // Interactive effects for project cards
    function setupCardInteractions() {
      const projectCards = document.querySelectorAll('.project-card');
      
      projectCards.forEach(card => {
        // Additional interactive effects could be added here if needed
        
        // Example: Adding a subtle animation when clicking a card
        card.addEventListener('click', function(e) {
          if (e.target.tagName !== 'A') { // Don't trigger on link clicks
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
              this.style.transform = '';
            }, 100);
          }
        });
      });
    }
  
    // Initialize the functionality
    // Uncomment if using dynamic tech tag creation
    // populateTechTags();
    setupCardInteractions();
  });