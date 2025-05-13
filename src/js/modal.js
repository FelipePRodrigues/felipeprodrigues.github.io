var modal = document.getElementById("myModal");
var closeSpan = document.getElementsByClassName("close")[0];

function openModal(project) {
    if (project.id) {
        fillModal(project.id);
    }
}

closeSpan.onclick = function() {
    hideModal();
}

window.onclick = function(event) {
    if (event.target == modal) {
        hideModal();
    }
}

function fillModal(projectId) {
    if (projectId && document.getElementById(projectId + "-content")) {
        document.body.style.overflowY = "hidden";
        document.getElementById(projectId + "-content").style.display = "block";

        fillScreenshots(projectId);

        modal.style.display = "block";
    }
}

function hideModal() {
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflowY = "auto";
    }

    var projectContents = document.getElementsByClassName("project-content");

    for (i = 0; i < projectContents.length; i++) {
        projectContents[i].style.display = "none";
    }
}

function fillScreenshots(projectId) {
    if (document.getElementById("screenshots-" + projectId)) {
        let language = window.navigator.userLanguage || window.navigator.language;
        let screenshotTitle = language == "pt-BR" ? "Clique para abrir em uma nova guia" : "Click to open in a new tab";

        let screenshotsParent = document.getElementById("screenshots-" + projectId)
        let screenshots = "";

        for (i = 1; i < 3; i++) {
            screenshots += "<img src=\"../img/projects/screenshots/" + projectId + "-" + i + ".webp\" onclick=\"openScreenshot(this);\" title=\"" + screenshotTitle + "\"/>";
        }

        screenshotsParent.innerHTML = screenshots;
    }
}