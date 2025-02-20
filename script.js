// Fade out header on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  // Adjust the threshold for faster disappearance
  if (scrollPosition > 50) { // Change this value to control when the header starts fading
    header.style.opacity = 1 - (scrollPosition - 50) / 50; // Adjust the divisor for faster fade
    if (scrollPosition > 100) { // Change this value to control when the header fully disappears
      header.style.opacity = 0;
    }
  } else {
    header.style.opacity = 1;
  }
});

// Fade out hero text and fade in video on scroll
const heroContent = document.querySelector('.hero-content');
const videoSection = document.querySelector('.video-section');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const heroHeight = document.querySelector('.hero').offsetHeight;

  // Fade out hero content
  if (scrollPosition > heroHeight * 0.05) {
    heroContent.classList.add('fade-out');
  } else {
    heroContent.classList.remove('fade-out');
  }

  // Fade in video section
  if (scrollPosition > heroHeight * 0.05) {
    videoSection.classList.add('fade-in');
  } else {
    videoSection.classList.remove('fade-in');
  }
});



// Function to adjust font size based on screen width
function adjustFontSize() {
  const screenWidth = window.innerWidth;
  const baseFontSize = Math.max(12, Math.min(21, screenWidth / 100)); // Adjust formula as needed
  document.documentElement.style.fontSize = `${baseFontSize}px`;
}

// Run on page load and window resize
window.addEventListener('resize', adjustFontSize);
window.addEventListener('load', adjustFontSize);


// Fade in steps as the user scrolls
const steps = document.querySelectorAll('.step');

function checkSteps() {
  steps.forEach((step, index) => {
    const stepTop = step.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Trigger fade-in when the step is in the viewport
    if (stepTop < windowHeight * 0.8) {
      setTimeout(() => {
        step.classList.add('fade-in');
      }, index * 200); // Delay each step's fade-in for a staggered effect
    }
  });
}

// Run on page load and scroll
window.addEventListener('scroll', checkSteps);
window.addEventListener('load', checkSteps);




let lastScrollTop = 0;

// Function to detect scroll direction
function detectScrollDirection() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // User is scrolling down
    jiggleSteps();
  } else if (currentScrollTop < lastScrollTop) {
    // User is scrolling up
    jiggleSteps();
  }

  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // For mobile or negative scrolling
}

// Function to apply jiggle animation to steps
function jiggleSteps() {
  const steps = document.querySelectorAll('.step');

  steps.forEach((step) => {
    step.classList.add('jiggle'); // Add the jiggle class
    setTimeout(() => {
      step.classList.remove('jiggle'); // Remove the jiggle class after animation ends
    }, 500); // Match the duration of the animation (0.5s)
  });
}

// Run on scroll
window.addEventListener('scroll', detectScrollDirection);

function jiggleSteps() {
  const steps = document.querySelectorAll('.step');

  steps.forEach((step, index) => {
    setTimeout(() => {
      step.classList.add('jiggle'); // Add the jiggle class
      setTimeout(() => {
        step.classList.remove('jiggle'); // Remove the jiggle class after animation ends
      }, 500); // Match the duration of the animation (0.5s)
    }, index * 100); // Delay each step's jiggle by 100ms
  });
}