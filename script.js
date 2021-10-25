window.addEventListener("DOMContentLoaded", () => {
    let loader = document.querySelector(".loader"),
        boxes = document.querySelectorAll(".box");
    setTimeout ( () => {
        loader.style.opacity = "0";
        setTimeout( () => {
            loader.style.display = "none";
        }, 500)
    }, 3000)
})