/*
<div class="subforum-row">
    <div class="subforum-description subforum-column">
        <h1><a href="#" onclick="displayInfo()">COM S 319</a></h1>
        <p>Overview of user interface design. Evaluation and testing of user interfaces. Review of principles of object orientation, object oriented design and analysis using UML in the context of user interface design. Design of windows, menus and commands. Developing Web and Windows-based user-interfaces. Event-driven programming. Introduction to Frameworks and APIs for the construction of user interfaces.</p>
    </div>
    <div class="subforum-stats subforum-column center">
        <span>25 posts</span>
    </div>
</div>
*/

function loadClass(myClass) {
    var mainContainer = document.getElementById("subforum");
    console.log(myClass.classId);
    
    let mainDiv = document.createElement("div");
    mainDiv.className = "subforum-row";
    
    let classDiv = document.createElement("div");
    classDiv.classList.add('subforum-description','subforum-column');
    classDiv.innerHTML = `
        <img src=${myClass.url} alt="..." style="width: 200px;">
        <h1><a href="#" onclick="displayInfo()">${myClass.classId}</a></h1>
        <p>${myClass.description}</p>`;
    
    let postDiv = document.createElement("div");
    postDiv.classList.add('subforum-stats', 'subforum-column', 'center');
    postDiv.innerHTML = `<span>0 posts</span>`;

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