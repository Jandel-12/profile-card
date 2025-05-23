const darkBtn = document.getElementById("darkmode");
const container = document.querySelector(".container");
const main = document.getElementById("main");

darkBtn.addEventListener("click", ()=>
{
    container.classList.toggle("dark-mode")
    main.classList.toggle("dark-bg")
    darkBtn.textContent = container.classList.contains("dark-mode")
    ? "☀️" : "🌙"
})