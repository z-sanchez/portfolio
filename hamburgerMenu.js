const menuButton = document.getElementById("hamburgerMenu");
const list = document.getElementsByTagName("ul")[0];
let listItems = document.getElementsByTagName('li');
listItems = Array.from(listItems);

let toggleOn = false;

menuButton.addEventListener("click", () => {
    (toggleOn) ? toggleOn = false : toggleOn = true;

    if (toggleOn) list.style.display = "block";
    else list.style.display = "none";
});

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleOn = false;
    list.style.display = "none";
  })
})