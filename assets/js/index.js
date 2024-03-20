const mode_button = document.getElementById('mode-button');
const logo = document.getElementById('logo')
const body = document.body;
const menu = document.querySelector('.menu ul li a');
const link = document.querySelectorAll('a');
const icon = document.querySelector('.bi-brightness-high');
body.style.backgroundColor = "whitesmoke";
mode_button.innerHTML = "<i class='bi bi-moon'></i>";

function changeColor(elements, color) {
  elements.forEach((item) => {
    item.style.color = color;
  })
}
function modeToggle() {
  if (body.style.backgroundColor === "whitesmoke") {
    body.style.backgroundColor = "#020617";
    mode_button.innerHTML = "<i class='bi bi-brightness-high' style='color: white'></i>";
    logo.innerHTML = `<img src="/assets/images/whitelogo.png" alt="logo" width="200px">`
    body.style.color = "white"
    changeColor(link, "white")
  } else {
    body.style.backgroundColor = "whitesmoke";
    mode_button.innerHTML = "<i class='bi bi-moon'></i>";
    logo.innerHTML = `<img src="/assets/images/blacklogo.png" alt="logo" width="200px">`
    body.style.color = "black"
    changeColor(link, "black")

  }


}
mode_button.addEventListener('click', modeToggle);
