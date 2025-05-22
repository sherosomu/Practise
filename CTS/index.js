const themeButtons = document.querySelectorAll(".theme-btn");

themeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    switch (theme) {
      case "dark":
        document.body.style.background = "#121212";
        document.body.style.color = "#ffffff";
        break;
      case "light":
        document.body.style.background = "#ffffff";
        document.body.style.color = "#000000";
        break;
      case "solar":
        document.body.style.background = "#fdf6e3";
        document.body.style.color = "#657b83";
        break;
      case "random":
        document.body.style.background = getRandomColor();
        document.body.style.color = getRandomColor();
        break;
    }
  });
});

function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 60%, 70%)`;
}
