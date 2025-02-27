
/* 
The IntersectionObserver observes all elements with the reveal class.
When an element becomes visible (based on the threshold and rootMargin), the visible class is added to trigger the CSS animation.
*/

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".reveal");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });