// Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // Validate form
  if (name === '' || email === '' || subject === '' || message === '') {
    showMessage('Please fill in all required fields!', 'error');
    return;
  }
  
  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showMessage('Please enter a valid email address!', 'error');
    return;
  }
  
  // Show success message
  showMessage('Thank you for your message! I will get back to you soon.', 'success');
  
  // Reset form
  contactForm.reset();
  
  // In a real website, you would send this data to a server here
  console.log({
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message
  });
});

// Function to show form messages
function showMessage(text, type) {
  formMessage.textContent = text;
  formMessage.className = type;
  
  // Hide message after 5 seconds
  setTimeout(function() {
    formMessage.className = '';
  }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// CTA Button Click Handler
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe portfolio items and service cards
document.querySelectorAll('.portfolio-item, .service-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Console message
console.log('Welcome to GREEN PHANTOM! 🎨');
console.log('Your creative journey starts here.');
