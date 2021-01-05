let cssFile = document.getElementById("theme-style");
let themeDots = document.getElementsByClassName("theme-dot");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log(mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    cssFile.href = "default.css";
  } else if (mode == "blue") {
    cssFile.href = "blue.css";
  } else if (mode == "green") {
    cssFile.href = "green.css";
  } else if (mode == "purple") {
    cssFile.href = "purple.css";
  }
  localStorage.setItem("theme", mode);
}
