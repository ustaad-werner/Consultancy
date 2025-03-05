
//4th functionality 
document.addEventListener('DOMContentLoaded', function() {
  // 1. Card Hover Interactions
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.zIndex = '10';
    });
    card.addEventListener('mouseleave', () => {
      card.style.zIndex = '1';
    });
  });

  // 2. Slider Navigation Logic
  const bullets = document.querySelectorAll('.bullets__item');
  bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
      // Update slider position based on bullet index
      const sliderHolder = document.querySelector('.slider__holder');
      sliderHolder.style.transform = `translateX(-${index * 100}%)`;
    });
  });

  // 3. Auto-Advance (Optional)
  let currentSlide = 0;
  setInterval(() => {
    currentSlide = (currentSlide + 1) % 4;
    document.getElementById(`slide-${currentSlide + 1}`).checked = true;
  }, 5000); // Change slide every 5 seconds
});

class ProjectSlider {
  constructor() {
    this.slider = document.querySelector('.slider');
    this.slides = document.querySelectorAll('.slider__item');
    this.bullets = document.querySelectorAll('.bullets__item');
    this.currentIndex = 0;
    
    this.init();
  }

  init() {
    // Initialize event listeners
    this.bullets.forEach((bullet, index) => {
      bullet.addEventListener('click', () => this.goToSlide(index));
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });

    // Hover effects
    this.slides.forEach(slide => {
      slide.addEventListener('mouseenter', this.handleHover);
      slide.addEventListener('mouseleave', this.resetHover);
    });

    // Auto-advance
    this.startAutoAdvance();
  }

  handleHover(e) {
    e.target.style.transform = 'scale(1.05) translateY(-10px)';
    e.target.style.zIndex = '10';
  }

  resetHover(e) {
    e.target.style.transform = '';
    e.target.style.zIndex = '1';
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateSlider();
    this.updateBullets();
  }

  updateSlider() {
    this.slides.forEach((slide, i) => {
      slide.style.transform = this.calculateTransform(i);
      slide.style.opacity = i === this.currentIndex ? '1' : '0.5';
    });
  }

  calculateTransform(index) {
    const offset = index - this.currentIndex;
    return `translateX(${offset * 100}%) scale(${1 - Math.abs(offset) * 0.15})`;
  }

  updateBullets() {
    this.bullets.forEach(bullet => 
      bullet.classList.remove('active'));
    this.bullets[this.currentIndex].classList.add('active');
  }

  startAutoAdvance() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
      this.updateSlider();
      this.updateBullets();
    }, 8000);
  }
}

// Initialize slider
new ProjectSlider();


/* --------------------------------------------------- */

// // 3rd functionality
// document.addEventListener('DOMContentLoaded', function() {
//   const cards = document.querySelectorAll('.project-card');
  
//   cards.forEach((card, index) => {
//     // Set initial z-index based on position
//     card.style.zIndex = cards.length - index;
    
//     card.addEventListener('mouseenter', () => {
//       // Add temporary scale effect
//       card.style.transform = `rotate(0deg) scale(1.05) translateY(-20px)`;
//     });
    
//     card.addEventListener('mouseleave', () => {
//       // Return to original rotation but keep z-index management
//       const rotations = [-3, 2, -1, 4];
//       card.style.transform = `rotate(${rotations[index]}deg) scale(1)`;
//     });
//   });
// });




/* --------------------------------------------------------- */


// 2nd functionality 
// // Update card interactions for better touch support
// document.addEventListener('DOMContentLoaded', function() {
//   const projectCards = document.querySelectorAll('.project-card');
  
//   projectCards.forEach(card => {
//     card.addEventListener('mouseenter', function() {
//       this.style.zIndex = '10';
//     });
    
//     card.addEventListener('mouseleave', function() {
//       this.style.zIndex = '1';
//     });
//   });
// });


/* ----------------------------------------------- */
// 1st functionality
// preivous functionality
// //dynamic projects loading
// // JavaScript for Projects Section
// document.addEventListener('DOMContentLoaded', function() {
//     // Dynamic creation of tech tags
//     const techStacks = {
//       'card1': ["React", "Node.js", "AWS", "Docker"],
//       'card2': ["Python", "TensorFlow", "D3.js", "Flask"],
//       'card3': ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
//       'card4': ["Socket.IO", "Express", "React", "Redis"]
//     };
  
//     // If you want to dynamically create the tech tags rather than having them in HTML
//     // This is optional since we already included them in the HTML, but included here for completeness
//     function populateTechTags() {
//       const techTagContainers = document.querySelectorAll('.tech-tags');
      
//       techTagContainers.forEach((container, index) => {
//         // Clear existing tags if needed
//         // container.innerHTML = '';
        
//         // Get the appropriate tech stack for this card
//         const cardKey = `card${index + 1}`;
//         const techs = techStacks[cardKey];
        
//         // Skip if we're not using this dynamic approach
//         if (container.children.length > 0) return;
        
//         // Create and append tags
//         techs.forEach(tech => {
//           const span = document.createElement('span');
//           span.className = 'tech-tag';
//           span.textContent = tech;
//           container.appendChild(span);
//         });
//       });
//     }
  
//     // Interactive effects for project cards
//     function setupCardInteractions() {
//       const projectCards = document.querySelectorAll('.project-card');
      
//       projectCards.forEach(card => {
//         // Additional interactive effects could be added here if needed
        
//         // Example: Adding a subtle animation when clicking a card
//         card.addEventListener('click', function(e) {
//           if (e.target.tagName !== 'A') { // Don't trigger on link clicks
//             this.style.transform = 'scale(0.98)';
//             setTimeout(() => {
//               this.style.transform = '';
//             }, 100);
//           }
//         });
//       });
//     }
  
//     // Initialize the functionality
//     // Uncomment if using dynamic tech tag creation
//     // populateTechTags();
//     setupCardInteractions();
//   });