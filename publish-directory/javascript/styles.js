// Loads sections of the page dynamically

function loadComponent(componentName) {
  fetch(`${componentName}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    });
}

// Handle navigation and load components
window.addEventListener("hashchange", () => {
  const hash = window.location.hash;
  switch (hash) {
    case "#home":
      loadComponent("home");
      break;
    case "#about":
      loadComponent("about");
      break;
    default:
      loadComponent("home"); // Load the home component by default
      break;
  }
});

// Initial component load
loadComponent("home");
