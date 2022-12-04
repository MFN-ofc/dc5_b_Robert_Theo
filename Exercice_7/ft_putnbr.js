function combinaisons(nombre) {
    let resultat = [];
    let nombreString = nombre.toString();
    let nombreLength = nombreString.length;
    
    function permutate(arr, m = []) {
      if (arr.length === 0) {
        resultat.push(m.join(''))
      } else {
        for (let i = 0; i < arr.length; i++) {
          let curr = arr.slice();
          let next = curr.splice(i, 1);
          permutate(curr.slice(), m.concat(next))
       }
     }
    }
    permutate(nombreString.split(''));
    document.write('nombre entré en paramètre : '+nombre);
    document.write('<br>');
    document.write('combinaisons possibles : '+resultat);
  }
  combinaisons(156);