//navbar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar")
    var navigation = document.getElementById("navigation")
    iconBar.setAttribute("style", "display: none;")
    navigation.classList.remove("hide")
}

function openIconBar(){
    var iconBar = document.getElementById("iconBar")
    var navigation = document.getElementById("navigation")
    iconBar.setAttribute("style", "display: block;")
    navigation.classList.add("hide")
}


//subforum navigation
function displayInfo(){
    var mainContainer = document.getElementById("class-title")
    var container = document.getElementById("class-container")
    
    var main = document.getElementById("main")
    main.setAttribute("style", "display: none;")

    var classTitle = document.getElementById("class-title")
    classTitle.setAttribute("style", "display: flex;")

    var classContainer = document.getElementById("class-container")
    classContainer.setAttribute("style", "display: flex;")

    let div = document.createElement("div")
    div.innerHTML=`
    <h2>COM S 319</h2><br>
    <h3>Construction of User Interfaces</h3><br><br>
    <p><strong>Pre-reqs:</strong> COM S 228</p><br><br>
    <p><strong>Description:</strong> Overview of user interface design. Evaluation and testing of user interfaces. Review of principles of object orientation, object oriented design and analysis using UML in the context of user interface design. Design of windows, menus and commands. Developing Web and Windows-based user-interfaces. Event-driven programming. Introduction to Frameworks and APIs for the construction of user interfaces.</p>
    `
    let divBtn = document.createElement("div")
    divBtn.innerHTML=`
    <a href="classRating.html">Back</a>
    `

    mainContainer.appendChild(div)
    container.appendChild(divBtn)
}