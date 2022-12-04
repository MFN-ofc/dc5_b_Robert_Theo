function triAlphabetique(){
    var alphabet = 'rzadcbefgxhijklmnopqstuvwy';
    var alphabetTrie = alphabet.split('').sort().reverse().join('');
  console.log(alphabetTrie);
  }
  triAlphabetique(); 