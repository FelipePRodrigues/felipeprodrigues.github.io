var modal = document.getElementById("myModal");                
var spanClose = document.getElementsByClassName("close")[0];

function openCTGIS(){        
    modal.style.display = "block";
}

spanClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}