
  const topBar = document.querySelector('.top-bar');
  const bottomBar = document.querySelector('.bottom-bar');
  const navLinks = document.querySelectorAll('.navbar a');

  // On click, animate and store transition state
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const destination = this.getAttribute('href');

      // Set flag for entry animation
      sessionStorage.setItem('shouldAnimate', 'true');

      // Animate bars in
      topBar.classList.add('active');
      bottomBar.classList.add('active');

      setTimeout(() => {
        window.location.href = destination;
      }, 1700);
    });
  });

  // On load: check if should animate out
  window.addEventListener('DOMContentLoaded', () => {
    const shouldAnimate = sessionStorage.getItem('shouldAnimate');
    if (shouldAnimate) {
      // Start with bars visible
      topBar.classList.add('active');
      bottomBar.classList.add('active');

      // Animate them out
      setTimeout(() => {
        topBar.classList.remove('active');
        bottomBar.classList.remove('active');
        sessionStorage.removeItem('shouldAnimate');
      }, 100); // small delay to allow class application
    }
  });