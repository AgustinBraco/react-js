const mountainBig = document.querySelector("#mountain-blue");
const mountainSmall = document.querySelector("#mountain-red");
const treesLeft = document.querySelector("#trees-left");
const treesBottom = document.querySelector("#trees-bottom");
const man = document.querySelector("#man");
const plants = document.querySelector("#plants");
const title = document.querySelector("#title");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY

    mountainBig.style.left = scroll * 0.4 + "px";
    mountainSmall.style.left = scroll * 0.5 + "px";
    treesLeft.style.bottom = scroll * -0.4 + "px";
    treesBottom.style.left = scroll * 0.8 + "px";
    man.style.right = scroll * 0.5 + "px";
    plants.style.right = scroll * 1 + "px";
    title.style.fontSize = scroll * 0.3 + "px";
});