function loadClass(myClass) {

    let titleDiv = document.getElementById("classTitle");
    titleDiv.innerHTML = `<h1>${myClass.classId}</h1>`;

    let descDiv = document.getElementById("classDescription");

    let classDiv = document.createElement("div");
    classDiv.classList.add('subforum-description', 'subforum-column');
    classDiv.innerHTML = `
        <img src=${myClass.url} alt="..." style="width: 200px;">
        <h1>${myClass.title}</h1>
        <p>Pre-reqs: ${myClass.prereq}</p>
        <p>${myClass.description}</p>`;
    descDiv.appendChild(classDiv);
}

function loadComment(comment) {
    var mainContainer = document.getElementById("comments");

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let commentDiv = document.createElement("div");
    commentDiv.classList.add('subforum-description', 'subforum-column');

    commentDiv.innerHTML = `
        <p class="comment-title"><strong>@${comment.username}</strong></p>
        <p class="date">${comment.date}</p>
        <p>${comment.comment}</p>`;

    mainDiv.appendChild(commentDiv);
    mainContainer.appendChild(mainDiv);
}

function loadTips(tip) {
    var mainContainer = document.getElementById("tips");

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let tipDiv = document.createElement("div");
    tipDiv.classList.add('subforum-description', 'subforum-column');

    tipDiv.innerHTML = `
        <p class="comment-title"><strong>${tip.date}</strong></p>
        <p>${tip.comment}</p>`;

    mainDiv.appendChild(tipDiv);
    mainContainer.appendChild(mainDiv);
}



function noComments() {
    var mainContainer = document.getElementById("comments");

    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-full-row";

    let commentDiv = document.createElement("div");
    commentDiv.classList.add('subforum-description', 'subforum-column');
    commentDiv.innerHTML = `<p>No comments yet.</p>`;

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

fetch('data.json')
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

fetch('tips.json')
.then(response => response.json())
.then(data => {
    if(data[course]) {
        //there are comments
        data[course].forEach(tip => { 
            loadTips(tip);
        });
    } else {
        console.log("No comments for" + course); 
        noComments();
    }
})
.catch(error => console.error('Error fetching JSON:', error));


function hideTips(){
    document.querySelector("#comments").classList.remove('hide')
    document.querySelector("#tips").classList.add('hide');
}

function hideComments(){
    document.querySelector("#comments").classList.add('hide')
    document.querySelector("#tips").classList.remove('hide');
}