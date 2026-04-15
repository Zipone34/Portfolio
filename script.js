const btn = document.getElementById("toggleBtn");
const img = document.getElementById("profile");
const body = document.body;

let isDark = localStorage.getItem("mode") === "dark";

if (isDark) {
    body.classList.add("dark");
    img.src = "./images/shy.png";
    btn.textContent = "☀️";
}

btn.addEventListener("click", () => {
    isDark = !isDark;

    body.classList.toggle("dark");

    if (isDark) {
        img.src = "./images/shy.png";
        btn.textContent = "☀️";
        localStorage.setItem("mode", "dark");
    } else {
        img.src = "./images/normal.jfif";
        btn.textContent = "🌙";
        localStorage.setItem("mode", "light");
    }
});