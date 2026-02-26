function initDarkMode() {
    const btn = document.createElement("button");
    btn.id = "darkModeBtn";
    btn.innerHTML = "🌙 Mode";
    
    const navUl = document.querySelector("nav ul");
    if (navUl) {
        const li = document.createElement("li");
        li.appendChild(btn);
        navUl.appendChild(li);

        btn.onclick = () => {
            document.body.classList.toggle("dark-theme");
            btn.innerHTML = document.body.classList.contains("dark-theme") ? "☀️ Terang" : "🌙 Gelap";
        };
    }
}

window.onload = () => {
    initDarkMode();
    calculateReadingTime();
};