// import SimpleParallax from "simple-parallax-js/vanilla";

// Import SimpleParallax from the library
import SimpleParallax from "simple-parallax-js/vanilla";

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select the elements you want to apply parallax effect to
    var images = document.getElementsByClassName('img');

    // Initialize SimpleParallax on each selected element
    new SimpleParallax(images, {
        maxTransition: 40 // Example option: max transition effect
        // You can adjust other options here as needed
    });
});
