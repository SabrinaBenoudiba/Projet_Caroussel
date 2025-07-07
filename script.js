
// Tableau contenant les identifiants des vidéos YouTube à afficher
var videos = [
  'dB_xVd-hu1I',
  'rr2qgBq0s7w',
  'eZX2r2EBwKA',
];

// Récupère la div où la vidéo sera affichée
var video = document.getElementById('recetteVideo');

// Récupère tous les boutons de la page (pour chaque recette)
var buttons = document.getElementsByTagName('button');

// Fonction qui retourne une fonction pour afficher la i-ème vidéo dans la div 'video'
function pourAfficherVideo(i) {
  return function() {
    // Insère un iframe YouTube correspondant à la vidéo sélectionnée
    video.innerHTML = '<iframe width="320" height="200" src="https://www.youtube.com/embed/' + videos[i] + '?autoplay=1" allowfullscreen></iframe>';
  };
}

// Associe à chaque bouton la fonction qui affiche la vidéo correspondante
for (var i = 0; i < buttons.length; i++) {
  buttons[i].onclick = pourAfficherVideo(i);
}