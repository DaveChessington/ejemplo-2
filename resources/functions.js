// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  const isDark = document.documentElement.classList.contains("dark");
  themeToggle.setAttribute("aria-pressed", isDark);
});

// Focus on form
document.getElementById("focusForm").addEventListener("click", () => {
  document.getElementById("name").focus();
});

// Contact form submit
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
  form.reset();
});
