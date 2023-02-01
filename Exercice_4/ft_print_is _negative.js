var nombre = prompt("Entrer un nombre");

nombre = parseInt(nombre);

function afficherSigne(nombre) {

  if(Number.isInteger(nombre)){

    if (nombre >= 0) {

      document.write("P");

    } else if (nombre < 0) {

      document.write("N");

    }
  }else{
    document.write("pas un entier batard");
  }
  }

afficherSigne(nombre);
