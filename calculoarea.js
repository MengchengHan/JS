var boton = document.getElementById('Calcular');
boton.addEventListener("click", calculo, false);
function calculo() {
    var radio = document.getElementById('radio').value;
    document.getElementById('area').innerHTML = Math.PI * radio * radio; 
    document.getElementById('longitud').innerHTML = 2 * Math.PI * radio; 
}