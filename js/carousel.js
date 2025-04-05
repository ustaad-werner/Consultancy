  // Add event listeners to make the hover effect work better on mobile
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    // For touch devices, we'll toggle a class on touch instead of using hover
    if ('ontouchstart' in window) {
      cards.forEach(card => {
        card.addEventListener('touchstart', function() {
          // First, reset all cards
          cards.forEach(c => c.classList.remove('active'));
          // Then activate the touched card
          this.classList.add('active');
        });
      });
      
      // Add touch-specific styles
      const style = document.createElement('style');
      style.textContent = `
        .card.active {
          transform: translateX(0) scale(1) !important;
          opacity: 1 !important;
          z-index: 5 !important;
        }
      `;
      document.head.appendChild(style);
    }
  });