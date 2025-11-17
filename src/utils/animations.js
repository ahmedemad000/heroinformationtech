// Scroll reveal animation


export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right').forEach(el => {
    observer.observe(el);
  });
};

// Add this to your CSS:
export const animationStyles = `
  .fade-in-up {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease-out;
  }
  
  .slide-in-left {
    opacity: 0;
    transform: translateX(-50px);
    transition: all 0.8s ease-out;
  }
  
  .slide-in-right {
    opacity: 0;
    transform: translateX(50px);
    transition: all 0.8s ease-out;
  }
  
  .animate-in {
    opacity: 1;
    transform: translate(0);
  }
`;