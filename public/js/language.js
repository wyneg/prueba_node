var arrayLang = {
    "español": {
        "HOME": "Home",
        "COTIZ": "Cotización",
        "BIEN": "BIENVENIDOS A MEI PULSERAS.",
        "INTRO": "¡Hola! Mi nombre es Marcela Buljevic, Diseñadora Gráfica y fanática de las pulseras hechas a mano. "+
        "Te presento Mei Pulseras, mi emprendimiento, que nace el año 2022 con el fin de crear pulseras coloridas y atemporales, para complementar tu outfit del día a día. "+
        "Todas nuestras pulseras son 100% hechas a mano con materiales cuidadosamente seleccionados como: piedras naturales, cristales, vidrio, acero y plata. "+
        "Cada pieza es única y está hecha con mucho cariño. Si te gustó mi trabajo, no dudes en contactarme.",
        "SIGUE": "SÍGUENOS",
        "F1": "NOMBRE COMPLETO",
        "F2": "RUT",
        "F3": "DIRECCIÓN",
        "F4": "COMUNA",
        "F5": "TELÉFONO",
        "F6": "CORREO",
        "F7": "ELIJA SU PRODUCTO A COTIZAR:",
    },
    "english": {
        "HOME": "Home",
        "COTIZ": "Pricing",
        "BIEN": "WELCOME TO MEI BRACELETS.",
        "INTRO": "Hello! My name is Marcela Buljevic, Graphic Designer and fan of handmade bracelets."+
        "I present to you Mei Pulseras, my venture, which was born in 2022 with the aim of creating colorful and timeless bracelets, to complement your everyday outfit. "+
        " All our bracelets are 100% handmade with carefully selected materials such as: natural stones, crystals, glass, steel and silver. "+
        "Each piece is unique and made with love. If you liked my work, don't hesitate to contact me.",
        "SIGUE": "FOLLOW US",
        "F1": "FULL NAME",
        "F2": "ID",
        "F3": "ADDRESS",
        "F4": "ZIP CODE",
        "F5": "PHONE NUMBER",
        "F6": "EMAIL",
        "F7": "CHOOSE YOUR PRODUCT TO QUOTE:",
    }
};

function textos (lang){
    if(lang === "english"){
        $('textarea').attr("placeholder", "Leave us your comment.");
        $('input:submit').attr("value", "Pricing");
    } else {
        $('textarea').attr("placeholder", "Deje su comentario.");
        $('input:submit').attr("value", "Cotizar");
    }
}

$(document).ready(function() {
    var lang = "español";

    const idioma = document.cookie;

    if(idioma !== ""){
        lang = idioma;
        textos(lang);
    } 

    $(".lang").each(function(index, element){
        $(this).text(arrayLang[lang][$(this).attr("key")]);
    });
});

$(".translate").click(function(){
    var lang = $(this).attr("id");

    textos(lang);
    
    $(".lang").each(function(index, element){
        $(this).text(arrayLang[lang][$(this).attr("key")]);
        document.cookie = lang;
    });
});