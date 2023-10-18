document.addEventListener("DOMContentLoaded", function() {
    // Get all the navigation links
    const navLinks = document.querySelectorAll(".navigation a");

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior

            // Get the target section's ID from the link's href
            const targetId = link.getAttribute("href").substring(1);

            // Find the target section by its ID
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Calculate the scroll position
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;

                // Scroll to the target section with smooth behavior
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
