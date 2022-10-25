function cambiaIMG(){
    var image = document.getElementById('myImage');
    if (image.src.match("foto1")) {
        image.src = "foto2.jpg";
    }
    else if (image.src.match("foto2")) {
        image.src = "foto3.jpg";
    } else {
        image.src = "foto1.jpg";
    }
}
