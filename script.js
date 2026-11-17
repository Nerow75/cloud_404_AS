// On recupère les elements html
const searchForm = document.getElementById("search");
const searchInput = document.getElementById("search_field");
const errorDiv = document.getElementById("error_message");

// On écoute l'action submit
searchForm.addEventListener("submit", function (event) {
  // Si la valeur nettoyée des espaces est strictement vide
  if (searchInput.value.trim() === "") {
    // 1. On empêche le formulaire de partir
    event.preventDefault();

    // 2. On affiche le message d'erreur
    searchInput.style.borderCorler = "#cf222e";
    errorDiv.style.display = "block";
    // 3. On remet l'utilisateur sur l'input text
    searchInput.focus();
  }
  // Sinon comportement normal
});

// On écoute le champ input
searchInput.addEventListener("input", function () {
  // On cache le message d'erreur
  searchInput.style.borderCorler = "";
  errorDiv.style.display = "none";
});
