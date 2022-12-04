function triAlphabetique(){
    var alphabet = 'rzadcbefgxhijklmnopqstuvwy';
    var alphabetTrie = alphabet.split('').sort().join('');
  
  return alphabetTrie;
  
  }
  
  console.log(triAlphabetique()); // affiche l'alphabet 
