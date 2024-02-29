// Dynamically load and insert navbar.html content
fetch('navbar.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('navbarContainer').innerHTML = html;
    });

// Dynamically load and insert navbar.html content
fetch('footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footerContainer').innerHTML = html;
    });