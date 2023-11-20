function navbar(){
    var navbar = document.getElementById("navbar");

    var nav = document.getElementById("nav");

    if(navbar.style.display === "block"){
        navbar.style.display = "none";
        nav.style.height = "40px";
    } else {
        navbar.style.display = "block";
        nav.style.height = "150px";
    }
}