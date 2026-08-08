document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("darkModeToggle");

    if (toggle) {
        toggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                toggle.textContent = "☀️";
            } else {
                toggle.textContent = "🌙";
            }
        });
    }
});
