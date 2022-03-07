const aboutButtons = document.querySelectorAll(".aboutMeButton");

aboutButtons.forEach((button) => {
  button.addEventListener("click", (button) => {
    if (button.target.id === "skillsButton") {
      noDisplay("education", "experience");
      document.getElementsByClassName("skills")[0].style.display = "flex";
      makeButtonInactive("educationButton", "experienceButton");
      makeButtonActive(button.target);
    } else if (button.target.id === "educationButton") {
      noDisplay("skills", "experience");
      document.getElementsByClassName("education")[0].style.display = "flex";
      makeButtonInactive("skillsButton", "experienceButton");
      makeButtonActive(button.target);
    } else {
      noDisplay("skills", "education");
      document.getElementsByClassName("experience")[0].style.display = "flex";
      makeButtonInactive("skillsButton", "educationButton");
      makeButtonActive(button.target);
    }
  });
});

function makeButtonActive(button) {
  button.style.backgroundColor = "#1e6ffb";
  button.style.color = "#ffffff";
}

function makeButtonInactive() {
  for (let index = 0; index < arguments.length; index++) {
    document.getElementById(arguments[index]).style.backgroundColor = "#ffffff";
    document.getElementById(arguments[index]).style.color = "#1e6ffb";
  }
}

function noDisplay() {
  for (let index = 0; index < arguments.length; index++) {
    document.getElementsByClassName(arguments[index])[0].style.display = "none";
  }
}


