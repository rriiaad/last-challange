let button = document.querySelector(".button");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

let title = document.querySelectorAll(".img-title");

title.forEach((title) => {
  title.addEventListener("mouseover", () => {
    title.classList.add("hovered");
  });
  title.addEventListener("mouseout", () => {
    title.classList.remove("hovered");
  });
});
