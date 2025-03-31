document.addEventListener("DOMContentLoaded", function () { const scrollContainer = document.querySelector(".scroll-container"); const scrollContent = document.querySelector(".scroll-content"); const scrollLeftBtn = document.getElementById("scroll-left"); const scrollRightBtn = document.getElementById("scroll-right"); let autoScrollActive = true; let scrollInterval;

// Function to scroll left
function scrollLeft() {
    scrollContainer.scrollBy({ left: -200, behavior: "smooth" });
}

// Function to scroll right
function scrollRight() {
    scrollContainer.scrollBy({ left: 200, behavior: "smooth" });
}

// Attach click events
scrollLeftBtn.addEventListener("click", function () {
    autoScrollActive = false;
    scrollLeft();
});

scrollRightBtn.addEventListener("click", function () {
    autoScrollActive = false;
    scrollRight();
});

// Auto-scroll function
function startAutoScroll() {
    scrollInterval = setInterval(function () {
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContent.scrollWidth) {
            scrollContainer.scrollLeft = 0; // Reset to start
        } else {
            scrollContainer.scrollBy({ left: 2, behavior: "smooth" });
        }
    }, 50);
}

// Stop auto-scroll on user interaction
scrollContainer.addEventListener("mouseenter", function () {
    clearInterval(scrollInterval);
});

scrollContainer.addEventListener("mouseleave", function () {
    if (autoScrollActive) {
        startAutoScroll();
    }
});

// Start auto-scrolling initially
startAutoScroll();

});

