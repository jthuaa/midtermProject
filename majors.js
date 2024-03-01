function loadClass(myMajor) {
    var mainContainer = document.getElementById("subforum");
    console.log(myMajor.classId);
    
    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-row";
    
    let picDiv = document.createElement("div");
    picDiv.classList.add('subforum-column', 'pic-div', 'center');
    picDiv.innerHTML =`
        <img src=${myMajor.url} alt="..." style="width: 100%;">
    `;

    let classDiv = document.createElement("div");
    classDiv.classList.add('subforum-description','subforum-column');
    classDiv.innerHTML = `
        <h1><a href="majorInfo.html?info=${myMajor.majorId}">${myMajor.majorId}</a></h1>
        <p class="title"><strong>${myMajor.title}</strong></p>
        <p>${myMajor.description}</p>`;
    
    let postDiv = document.createElement("div");
    postDiv.classList.add('subforum-stats', 'subforum-column', 'center');
    postDiv.id = myMajor.majorId +"postCount";

    mainDiv.appendChild(picDiv);
    mainDiv.appendChild(classDiv);
    mainDiv.appendChild(postDiv);
    mainContainer.appendChild(mainDiv);
}

function getCourseCount(myMajor) {
    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        var courseCount = 0;
        
        data.classInfo.forEach(myCourse => {
            if(myCourse.majorId == myMajor.majorId) {
                courseCount++;
            }
        });

        var mainContainer = document.getElementById(myMajor.majorId +"postCount");
        let div = document.createElement("span");
        
        if(courseCount == 1) {
            div.innerHTML = `1 class`;
        } else {
            div.innerHTML = `${courseCount} classes`;
        }
        mainContainer.appendChild(div);
    })
    .catch(error => console.error('Error fetching JSON:', error));
}

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the music and create tables
        data.majorInfo.forEach(myMajor => {
            loadClass(myMajor);
            getCourseCount(myMajor);
    });
    })
    .catch (error => console.error('Error fetching JSON:', error));