const pageData = {
  home: `
    <h1>Welcome to My Website</h1>
    <p>This is a simple landing page with a decent navigation bar.</p>
  `,
  about: `
    <h1>About Me</h1>
    <p>Hello! I'm a passionate web developer from New Delhi, India. I love creating simple and beautiful websites.</p>
    <ul>
      <li>Experience: 3+ years in web development</li>
      <li>Skills: HTML, CSS, JavaScript</li>
      <li>Hobbies: Coding, Reading, Traveling</li>
    </ul>
  `,
  products: `
    <h1>Our Products</h1>
    <ul>
      <li>Product A - A great solution for your needs</li>
      <li>Product B - Reliable and affordable</li>
      <li>Product C - Customer favorite</li>
    </ul>
  `,
  contact: `
    <h1>Contact</h1>
    <p>You can reach me at:</p>
    <ul>
      <li>Email: example@email.com</li>
      <li>Phone: +91-12345-67890</li>
      <li>Location: New Delhi, India</li>
    </ul>
  `
};

const mainContent = document.getElementById('main-content');
const navLinks = document.querySelectorAll('.navbar a');
const topBar = document.querySelector('.top-bar');
const bottomBar = document.querySelector('.bottom-bar');

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
    }, 1800); // Match the CSS transition duration
  });
});
