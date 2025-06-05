const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.navbar a');
const topBar = document.querySelector('.top-bar');
const bottomBar = document.querySelector('.bottom-bar');
const pageData = {
  home: "<h1>Welcome to the Website</h1>",
  products: "<h1>About Us</h1><p>This is the about page content.</p>",
  contact: "<h1>Contact Us</h1><p>Reach out to us here.</p>",
};


navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const page = this.getAttribute('data-page');

    // Don't animate if already on the same page
    if (this.classList.contains('active')) return;

    // Remove active class from all links, add to clicked
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');

    // Start transition in
    topBar.classList.add('active');
    bottomBar.classList.add('active');

    // Wait for bars to meet, then change content
    setTimeout(() => {
      mainContent.innerHTML = pageData[page];

      // Start transition out
      topBar.classList.remove('active');
      bottomBar.classList.remove('active');
    }, 1700); // Match the CSS transition duration
  });
});