function validador(doc) {
    let regexDNI = /^\d{8}[A-Z]$/i;
    let regexNIE = /^[X-Z]\d{7}[A-Z]$/i;
    let regexCIF = /^[A-HPQSK-M]\w{8}$/i;

    if (doc.match(regexDNI)) {
        document.getElementById("msg").innerHTML = "Es un DNI";
        console.log(resto23(doc));
    } else if (doc.match(regexNIE)) {
        document.getElementById("msg").innerHTML = "Es un NIE";
        console.log(comprobarNIE(doc));
    } else if (doc.match(regexCIF)) {
        document.getElementById("msg").innerHTML = "Es un CIF";
        document.getElementById("msg3").innerHTML = comprobarCIF(doc);
    }

}

function resto23(doc) {
    doc = doc.replace(/^0+/, '');

    switch (doc.substring(0, 7) % 23) {
        case 0:
            return /T$/i.test(doc);
        case 1:
            return /R$/i.test(doc);
        case 2:
            return /W$/i.test(doc);
        case 3:
            return /A$/i.test(doc);
        case 4:
            return /G$/i.test(doc);
        case 5:
            return /M$/i.test(doc);
        case 6:
            return /Y$/i.test(doc);
        case 7:
            return /F$/i.test(doc);
        case 8:
            return /P$/i.test(doc);
        case 9:
            return /D$/i.test(doc);
        case 10:
            return /X$/i.test(doc);
        case 11:
            return /B$/i.test(doc);
        case 12:
            return /N$/i.test(doc);
        case 13:
            return /J$/i.test(doc);
        case 14:
            return /Z$/i.test(doc);
        case 15:
            return /S$/i.test(doc);
        case 16:
            return /Q$/i.test(doc);
        case 17:
            return /V$/i.test(doc);
        case 18:
            return /H$/i.test(doc);
        case 19:
            return /L$/i.test(doc);
        case 20:
            return /C$/i.test(doc);
        case 21:
            return /K$/i.test(doc);
        case 22:
            return /E$/i.test(doc);
        default:
            return null;
    }
}

function comprobarNIE(doc) {
    regexNIE_STX = /^X/i;
    regexNIE_STY = /^Y/i;
    regexNIE_STZ = /^Z/i;
    if (regexNIE_STX.test(doc)) {
        doc = doc.replace(/^\w/, '0');
    } else if (regexNIE_STY.test(doc)) {
        doc = doc.replace(/^\w/, '1');
    } else if (regexNIE_STZ.test(doc)) {
        doc = doc.replace(/^\w/, '2');
    }
    return resto23(doc);
}

function comprobarCIF(doc) {
    if (calcularCIF(doc)) {
        document.getElementById("msg2").innerHTML = "Correcto!";
        return "El tipo de organización es: " + tipoOrg(doc.substring(0, 1)) + " y la provincia a la que pertenece es: " + provincia(doc.substring(1, 3));
    }
}

function calcularCIF(doc) {
    let letras = ['J', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    let digitos7 = doc.substr(1, doc.length - 2);
    let letra = doc.substr(0, 1);
    let control = doc.substr(doc.length - 1);
    let suma = 0;
    let digito;

    for (let i = 0; i < digitos7.length; ++i) {
        digito = parseInt(digitos7[i]);
        if (isNaN(digito)) {
            return false;
        }
        if (i % 2 === 0) {
            digito *= 2;
            if (digito > 9) {
                digito = parseInt(digito / 10) + (digito % 10);
            }
            suma += digito;
        } else {
            suma += digito;
        }
    }

    suma %= 10; //Se necesita las unidades de la suma total
    if (suma !== 0) {
        digito = 10 - suma;
    } else {
        digito = suma;
    }

    if (letra.match(/[ABEH]/i)) {
        return String(digito) === control;
    }
    if (letra.match(/[NPQRSW]/i)) { //Para las excepciones de los ayuntamientos, etc
        return letras[digito] === control; 
    }

    return String(digito) === control || letras[digito] === control;
}

function tipoOrg(char) {
    switch (char.toUpperCase()) {
        case 'A':
            return "Sociedad anónima";
        case 'B':
            return "Sociedad responsabilidad limitada";
        case 'C':
            return "Sociedad colectiva";
        case 'D':
            return "Sociedad comanditaria";
        case 'E':
            return "Comunidad de bienes";
        case 'F':
            return "Sociedad corporativa";
        case 'G':
            return "Asociaciones y otros tipos no definidos";
        case 'H':
            return " Comunidad de propietarios en régimen de propiedad horizontal";
        case 'K':
        case 'L':
        case 'M':
            return "Formato Antiguo";
        case 'N':
            return "Entidades no residentes";
        case 'P':
            return "Corporación local";
        case 'Q':
            return "Organismo autónomo estatal o no, y asimilados, congregaciones e instituciones religiosas";
        case 'S':
            return "Órganos de la Administración del Estado y Comunidades Autónomas";
        default:
            return null;
    }
}

function provincia(cod) {
    switch (cod) {
        case '01':
            return "Álava";
        case '02':
            return "Albacete";
        case '03':
        case '53':
        case '54':
            return "Alicante";
        case '04':
            return "Álava";
        case '05':
            return "Almería";
        case '06':
            return "Ávila";
        case '07':
        case '57':
            return "Islas Baleares";
        case '08':
        case '58':
        case '59':
        case '60':
        case '61':
        case '62':
        case '63':
        case '64':
            return "Barcelona";
        case '09':
            return "Burgos";
        case '10':
            return "Cáceres";
        case '11':
        case '72':
            return "Cádiz";
        case '12':
            return "Castellón";
        case '13':
            return "Ciudad Real";
        case '14':
        case '56':
            return "Córdoba";
        case '15':
        case '70':
            return "La Coruña";
        case '16':
            return "Cuenca";
        case '17':
        case '55':
            return "Gerona";
        case '18':
            return "Granada";
        case '19':
            return "Guadalajara";
        case '20':
        case '71':
            return "Guipúzcoa";
        case '21':
            return "Huelva";
        case '22':
            return "Huesca";
        case '23':
            return "Jaén";
        case '24':
            return "León";
        case '25':
            return "Lérida";
        case '26':
            return "La Rioja";
        case '27':
            return "Lugo";
        case '28':
        case '78':
        case '79':
        case '80':
        case '81':
        case '82':
        case '83':
        case '84':
            return "Madrid";
        case '29':
        case '92':
        case '93':
            return "Málaga";
        case '30':
        case '73':
            return "Murcia";
        case '31':
            return "Navarra";
        case '32':
            return "Orense";
        case '33':
        case '74':
            return "Asturias";
        case '34':
            return "Palencia";
        case '35':
        case '76':
            return "Las Palmas";
        case '36':
        case '94':
            return "Pontevedra";
        case '37':
            return "Salamanca";
        case '38':
        case '75':
            return "Santa Cruz de Tenerife";
        case '39':
            return "Cantabria";
        case '40':
            return "Segovia";
        case '41':
        case '91':
            return "Sevilla";
        case '42':
            return "Soria";
        case '43':
        case '77':
            return "Tarragona";
        case '44':
            return "Teruel";
        case '45':
            return "Toledo";
        case '46':
        case '96':
        case '97':
        case '98':
            return "Valencia";
        case '47':
            return "Valladolid";
        case '48':
        case '95':
            return "Vizcaya";
        case '49':
            return "Zamora";
        case '50':
        case '99':
            return "Zaragoza";
        case '51':
            return "Ceuta";
        case '52':
            return "Melilla";
        default:
            return null;
    }
}