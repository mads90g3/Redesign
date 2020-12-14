window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", visMenu);
}

function visMenu() {
    console.log("visMenu");
    document.querySelector("#menu").classList.remove("hidden");
    document.querySelector("#exit_knap").classList.remove("hidden");
    document.querySelector("#menuknap").classList.add("hidden");
    document.querySelector("#exit_knap").addEventListener("click", skjulMenu);
}

function skjulMenu() {
    console.log("skjulMenu");
    document.querySelector("#menu").classList.add("hidden");
    document.querySelector("#exit_knap").classList.add("hidden");
    document.querySelector("#menuknap").classList.remove("hidden");
    document.querySelector("#menuknap").addEventListener("click", visMenu);
}
