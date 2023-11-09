var arrayLang = {
    "español": {
        "HOME": "Home",
        "COTIZ": "Cotización",
        "BIEN": "BIENVENIDOS A MEI PULSERAS.",
    },
    "english": {
        "HOME": "Home",
        "COTIZ": "Pricing",
        "BIEN": "WELCOME TO MEI PULSERAS.",
    }
};

$(document).ready(function() {
    var lang = "español";

    const idioma = document.cookie;

    if(idioma !== "" ){
        lang = idioma;
    }

    $(".lang").each(function(index, element){
        $(this).text(arrayLang[lang][$(this).attr("key")]);
    });
});

$(".translate").click(function(){
    var lang = $(this).attr("id");
    
    $(".lang").each(function(index, element){
        $(this).text(arrayLang[lang][$(this).attr("key")]);
        document.cookie = lang;
    });
});