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
        <p>${myClass.description}</p>`;
    
    let postDiv = document.createElement("div");
    postDiv.classList.add('subforum-stats', 'subforum-column', 'center');
    postDiv.innerHTML = `<span>25 posts</span>`;

    mainDiv.appendChild(classDiv);
    mainDiv.appendChild(postDiv);
    mainContainer.appendChild(mainDiv);
}


fetch('all_classes.json')
    .then(response => response.json())
    .then(data => {
        // Loop through the music and create tables
        data.classInfo.forEach(myClass => {
            loadClass(myClass);
    });
    })
    .catch (error => console.error('Error fetching JSON:', error));