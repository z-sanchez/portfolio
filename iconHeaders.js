let icons = document.getElementsByClassName("skillsIcon");
let headers = document.getElementsByClassName("skillsText");
icons = Array.from(icons);
headers = Array.from(headers);



icons.forEach((element, index) => {
    element.addEventListener("mouseover", (element) => {
        console.log("hovering... " + element.target);
        //element.target.style.display = 'none';
        headers[index].style.display = "block";
    });
    element.addEventListener("mouseleave", (element) => {
        console.log("hovering... " + element.target);
        headers[index].style.display = "none";
    });
});

