//navbar
function hideIconBar() {
    var iconBar = document.getElementById("iconBar")
    var navigation = document.getElementById("navigation")
    iconBar.setAttribute("style", "display: none;")
    navigation.classList.remove("hide")
}

function openIconBar() {
    var iconBar = document.getElementById("iconBar")
    var navigation = document.getElementById("navigation")
    iconBar.setAttribute("style", "display: block;")
    navigation.classList.add("hide")
}


// Dynamically load and insert navbar.html content
fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbarContainer').innerHTML = html;
    });