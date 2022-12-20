function validador(doc) {
    let regexDNI = /^\d{8}[A-Z]$/;
    let regexNIE = /^[X-Z]\d{7}[A-Z]$/;
    let regexCIF = /^[A-HPQSK-M]\d{8}$/;
    console.log(doc.match(regexNIE));

    if (doc.match(regexDNI)) {
        document.getElementById("msg").innerHTML = "Es un DNI";

        let array = doc.split('');

        console.log(array); 
    } else if (doc.match(regexNIE)) {
        document.getElementById("msg").innerHTML = "Es un NIE";

    } else if (doc.match(regexCIF)) {
        document.getElementById("msg").innerHTML = "Es un CIF";
    } 

}

function resto23(){
    switch (doc.substring(0,7) % 23){

    }
}

