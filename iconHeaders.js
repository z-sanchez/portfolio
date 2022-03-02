let icons = document.getElementsByClassName("skillsIcon");
let headers = document.getElementsByClassName("skillsText");
icons = Array.from(icons);
headers = Array.from(headers);



icons.forEach((element, index) => {
    element.addEventListener("mouseover", (element) => {
        headers[index].style.display = "block";
    });
    element.addEventListener("mouseleave", (element) => {
        headers[index].style.display = "none";
    });
});

