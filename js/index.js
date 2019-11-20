window.onload = function(){
    var language = window.navigator.userLanguage || window.navigator.language;
    if(language == "pt-BR")
        window.location = "pt-br/index.html";
    else
        window.location = "en-us/index.html";
};