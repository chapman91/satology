const contentContainer = document.getElementById("content");
const footerContainer = document.querySelector("footer");

// Loads sections of the page dynamically
function loadComponent(componentName, container) {
  fetch(`${componentName}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

// Handle navigation and load components
window.addEventListener("hashchange", () => {
  // store the current fragment identifier
  const hash = window.location.hash;
  switch (hash) {
    case "../publish-directory/html/navbar.html":
      loadComponent("navbar");
      break;
    case "../publish-directory/html/main.html":
      loadComponent("main");
      break;
    case "../publish-directory/html/footer.html":
      loadComponent("footer");
      break;
  }
});

// Initial component load
loadComponent("navbar");
