const themeButton = document.querySelector(".theme-button");
const savedTheme = localStorage.getItem("yipeng-site-theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("yipeng-site-theme", "dark");
  } else {
    localStorage.setItem("yipeng-site-theme", "light");
  }
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(function (entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

for (const revealItem of revealItems) {
  revealObserver.observe(revealItem);
}
