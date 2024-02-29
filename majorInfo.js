function loadMajor(myMajor) {
    console.log(myMajor.majorId);

    let titleDiv = document.getElementById("majorTitle");
    titleDiv.innerHTML = `<h1>${myMajor.majorId}</h1>`;

    let descDiv = document.getElementById("majorDescription");

    let classDiv = document.createElement("div");
    classDiv.classList.add('subforum-description', 'subforum-column');
    classDiv.innerHTML = `
        <img src=${myMajor.url} alt="..." style="width: 200px;">
        <h1>${myMajor.title}</h1>
        <p>${myMajor.description}</p>`;
    descDiv.appendChild(classDiv);
}

function loadCourse(course) {
    var mainContainer = document.getElementById("courses");

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let courseDiv = document.createElement("div");
    courseDiv.classList.add('subforum-description', 'subforum-column');

    courseDiv.innerHTML = `
        <a href="classInfo.html?info=${course.classId}"><p class="course-title"><strong>${course.classId}</strong></p></a>
        <p class="date">${course.title}</p>
        <p>${course.description}</p>`;

    mainDiv.appendChild(courseDiv);
    mainContainer.appendChild(mainDiv);
}

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const major = urlParams.get('info');

// Use the retrieved information
if (major) {
    console.log('Major:', major);
} else {
    console.log('No information passed.');
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the music and create tables
        data.majorInfo.forEach(myMajor => {
            if (myMajor.majorId == major) {
                loadMajor(myMajor);
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the music and create tables
        data.classInfo.forEach(myClass => {
            if (myClass.majorId == major) {
                loadCourse(myClass);
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));