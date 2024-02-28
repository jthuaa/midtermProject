function loadClass(myClass) {
    var mainContainer = document.getElementById("subforum");
    console.log(myClass.classId);

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let classDiv = document.createElement("div");
    classDiv.classList.add('subforum-description', 'subforum-column');
    classDiv.innerHTML = `
        <img src=${myClass.url} alt="..." style="width: 200px;">
        <h1>${myClass.classId}</h1>
        <p>${myClass.description}</p>`;
    mainDiv.appendChild(classDiv);
    mainContainer.appendChild(mainDiv);

    let commentsTitle = document.createElement("div");
    commentsTitle.className = "subforum-subtitle";
    commentsTitle.innerHTML = `<h1>Comments</h1>`;

    mainContainer.appendChild(commentsTitle);
}

function loadComment(comment) {
    var mainContainer = document.getElementById("subforum");

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let commentDiv = document.createElement("div");
    commentDiv.classList.add('subforum-description', 'subforum-column');
    commentDiv.innerHTML = `<p>${comment.comment}</p>`;

    commentDiv.innerHTML = `
        <h2>@${comment.username}</h2>
        <p class="date">${comment.date}</p>
        <p>${comment.comment}</p>`;

    mainDiv.appendChild(commentDiv);
    mainContainer.appendChild(mainDiv);
}

function noComments() {
    var mainContainer = document.getElementById("subforum");

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let commentDiv = document.createElement("div");
    commentDiv.classList.add('subforum-description', 'subforum-column');
    commentDiv.innerHTML = `<p>No comments yet</p>`;

    mainDiv.appendChild(commentDiv);
    mainContainer.appendChild(mainDiv);
}

// Get the URL parameters
const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('info');

// Use the retrieved information
if (course) {
    console.log('Course:', course);
} else {
    console.log('No information passed.');
}

fetch('all_classes.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the music and create tables
        data.classInfo.forEach(myClass => {
            if (myClass.classId == course) { 
                loadClass(myClass);
            }
        });
    })
    .catch(error => console.error('Error fetching JSON:', error));

fetch('comments.json')
    .then(response => response.json())
    .then(data => {
        if(data[course]) {
            //there are comments
            data[course].forEach(comment => { 
                loadComment(comment);
            });
        } else {
            console.log("No comments for" + course); 
            noComments();
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));