function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

function showMessage(activityName) {
  alert("You selected: " + activityName);
}

document.addEventListener("click", function (event) {
  const navMenu = document.getElementById("navMenu");
  const menuButton = document.querySelector(".menu-btn");

  if (!navMenu || !menuButton) {
    return;
  }

  const clickedInsideMenu = navMenu.contains(event.target);
  const clickedMenuButton = menuButton.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    navMenu.classList.remove("show");
  }
});
