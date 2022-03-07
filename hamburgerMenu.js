const menuButton = document.getElementById("hamburgerMenu");
const list = document.getElementsByTagName("ul")[0];
let listItems = document.getElementsByTagName('li');
listItems = Array.from(listItems);

let toggleOn = false;

menuButton.addEventListener("click", () => {
    if (toggleOn) {toggleOn = false; menuButton.style.transform = 'rotate(0deg)';} 
    else {toggleOn = true; menuButton.style.transform = 'rotate(90deg)'}

    if (toggleOn) list.style.display = "block";
    else list.style.display = "none";
});

listItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleOn = false;
    list.style.display = "none";
  })
})