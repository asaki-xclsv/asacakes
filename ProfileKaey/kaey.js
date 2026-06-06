const toggle = document.getElementById("themeToggle");


const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.toggle("dark", savedTheme === "dark");
} else {
  
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.body.classList.toggle("dark", prefersDark);
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});


