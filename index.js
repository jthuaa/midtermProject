function loadClass(myClass) {
    var mainContainer = document.getElementById("subforum");
    console.log(myClass.classId);
    
    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-row";
    
    let classDiv = document.createElement("div");
    classDiv.classList.add('subforum-description','subforum-column');
    classDiv.innerHTML = `
        <img src=${myClass.url} alt="..." style="width: 200px;">
        <h1><a href="classInfo.html?info=${myClass.classId}">${myClass.classId}</a></h1>
        <p class="title"><strong>${myClass.title}</strong></p>
        <p>${myClass.description}</p>`;
    
    let postDiv = document.createElement("div");
    postDiv.classList.add('subforum-stats', 'subforum-column', 'center');
    postDiv.id = myClass.classId +"postCount";

    mainDiv.appendChild(classDiv);
    mainDiv.appendChild(postDiv);
    mainContainer.appendChild(mainDiv);
}

function getCommentCount(myClass) {
    fetch('comments.json')
    .then(response => response.json())
    .then(data => {
        var commentCount = 0;
        if(data[myClass.classId]) {
            //there are comments
            data[myClass.classId].forEach(comment => { 
                commentCount++;
            });
        }
        var mainContainer = document.getElementById(myClass.classId +"postCount");
        let div = document.createElement("span");
        
        if(commentCount == 1) {
            div.innerHTML = `1 post`;
        } else {
            div.innerHTML = `${commentCount} posts`;
        }
        mainContainer.appendChild(div);
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the music and create tables
        data.classInfo.forEach(myClass => {
            loadClass(myClass);
            getCommentCount(myClass);
    });
    })
    .catch (error => console.error('Error fetching JSON:', error));