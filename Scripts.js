document.querySelectorAll(".portal").forEach(portal => {
    portal.addEventListener("click", function() {
        let section = this.id;
        alert("Entering " + section + "...");
        window.location.href = section + ".html"; // Redirects to respective pages
    });
});