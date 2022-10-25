let rand = Math.floor(Math.random() * 100 + 1);
let boton = document.getElementById("boton");
boton.addEventListener('click',a,false);

function a() {
    let num = document.getElementById("numero").value;

    console.log("numero: " + num + " | random: " + rand);
    if (num == rand) {
        console.log('CORRECTO! EL NÚMERO ES: ' + num);
    } else if (num < rand) {
        console.log('El número es menor ' + num);
    } else {
        console.log('El número es mayor ' + num);
    }
}
