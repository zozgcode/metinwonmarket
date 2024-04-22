// Wait for the entire page to load
window.addEventListener('load', function() {
    // Set a timeout to ensure the preloader is displayed for at least a short duration
    setTimeout(function() {
      // Add the 'loaded' class to the body to trigger the preloader hiding
      document.body.classList.add('loaded');
    }, 1000); // Adjust the timeout as needed
  });
  