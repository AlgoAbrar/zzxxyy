// Shared navigation loader
function loadNavigation() {
  fetch("index.html")
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const nav = doc.querySelector("nav");
      if (nav) {
        // Update active state based on current page
        const currentPage = window.location.pathname.split("/").pop();
        const links = nav.querySelectorAll("a");

        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (
            href === currentPage ||
            (currentPage === "" && href === "index.html")
          ) {
            link.classList.add("active");
          }
        });

        document.getElementById("nav-container").innerHTML = nav.outerHTML;
      }
    })
    .catch((error) => {
      console.error("Error loading navigation:", error);
    });
}

// Call this function on page load
document.addEventListener("DOMContentLoaded", loadNavigation);
