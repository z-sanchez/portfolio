const menuButton = document.getElementById("hamburgerMenu");
const list = document.getElementsByTagName("ul")[0];

menuButton.addEventListener("click", () => {
  list.style.display == ("" || "none")
    ? (list.style.display = "block")
    : (list.style.display = "none");
});
