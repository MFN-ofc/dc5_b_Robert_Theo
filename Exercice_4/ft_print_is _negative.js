let nombre = prompt("Entrer un nombre");
nombre = parseInt(nombre);
function afficherSigne(nombre) {
  if(Number.isInteger(nombre)){
    console.log(nombre);
    if (nombre > 0) {
      document.write("P");
      console.log("mabite")
    } else if (nombre < 0) {
      document.write("N");
      console.log("monzgeg")
    }
  }else{
    nombre = prompt("Entrer un nombre");
  }
    
  }
afficherSigne(nombre);
