function loadClass(myClass) {
    var mainContainer = document.getElementById("courses");
    console.log(myClass.classId);

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let classDiv = document.createElement("div");
    classDiv.classList.add('subforum-description', 'subforum-column');
    classDiv.innerHTML = `
        <img src=${myClass.url} alt="..." style="width: 200px;">
        <h1><a href="classInfo.html?info=${myClass.classId}">${myClass.classId}</a></h1>
        <p class="title"><strong>${myClass.title}</strong></p>
        <p>${myClass.description}</p>`;

    mainDiv.appendChild(classDiv);
    mainContainer.appendChild(mainDiv);
}

function loadMajor(myMajor) {
    var mainContainer = document.getElementById("majors");
    console.log(myMajor.majorId);

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let majorDiv = document.createElement("div");
    majorDiv.classList.add('subforum-description', 'subforum-column');
    majorDiv.innerHTML = `
        <img src=${myMajor.url} alt="..." style="width: 200px;">
        <h1><a href="majorInfo.html?info=${myMajor.majorId}">${myMajor.majorId}</a></h1>
        <p class="title"><strong>${myMajor.title}</strong></p>
        <p>${myMajor.description}</p>`;

    mainDiv.appendChild(majorDiv);
    mainContainer.appendChild(mainDiv);
}

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const info = urlParams.get('info').toUpperCase();

// Use the retrieved information
if (info) {
    console.log('Info:', info);
} else {
    console.log('No information passed.');
}

var searchResult = document.getElementById("resultsTitle");
searchResult.innerHTML = `Search results for: ${info}`;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var hasCourse = false;
        // Loop through the music and create tables
        data.classInfo.forEach(myClass => {
            if (myClass.classId.includes(info) || myClass.majorId.includes(info)) {
                loadClass(myClass);
                hasCourse = true;
            }
        });
        if (hasCourse) {
            var element = document.getElementById("noCourses");
            element.remove();
        } else {
            var element = document.getElementById("courseTitle");
            element.remove();
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var hasMajor = false;
        // Loop through the music and create tables
        data.majorInfo.forEach(myMajor => {
            if (myMajor.majorId.includes(info)) {
                loadMajor(myMajor);
                hasMajor = true;
            }
        });
        if (!hasMajor) {
            var element = document.getElementById("majorTitle");
            element.remove();
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));