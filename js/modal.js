var modal = document.getElementById("myModal");
var closeSpan = document.getElementsByClassName("close")[0];

function openModal(project){    
    if(project.id){        
        fillModal(project.id + "-content");        
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

function fillModal(projectId){
    if(projectId && document.getElementById(projectId)){
        document.getElementById(projectId).style.display = "block";
        modal.style.display = "block";
    }
}

function hideModal(){
    if(modal){
        modal.style.display = "none";        
    }
    
    var projectContents = document.getElementsByClassName("project-content");
    
    for(i = 0; i < projectContents.length; i++){
        projectContents[i].style.display = "none";
    }
}