// Génère un nombre aléatoire entre 12 et 17
function getRandomNumber() {
  return Math.floor(Math.random() * (17 - 12 + 1)) + 12;
}

// Vérifie si un cookie existe déjà pour ce nombre
function checkCookie() {
  var randomNumber = getCookie("random_number");
  if (randomNumber != "") {
    // Si oui, on utilise le nombre stocké dans le cookie
    return randomNumber;
  } else {
    // Sinon, on génère un nouveau nombre aléatoire et on le stocke dans un cookie
    randomNumber = getRandomNumber();
    setCookie("random_number", randomNumber, 365);
    return randomNumber;
  }
}

// Fonction pour récupérer les cookies
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// Fonction pour créer les cookies
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Récupère le nombre aléatoire (depuis le cookie s'il existe)
var randomNumber = checkCookie();

// Affiche le nombre aléatoire dans un élément h3
document.getElementById("random-number").innerHTML = randomNumber;