var pictures = [ // Tableau contenant les liens des images à afficher
    'Images/miel-eucalyptus.jpg',
    'Images/miel-euphorbe.jpg',
    'Images/miel-jujubier.jpg',
    'Images/miel-lavande.jpg',
    'Images/miel-nigelle.jpg',
    'Images/miel-oranger.jpg',
    'Images/miel-thym.jpg',
];

let picture = document.getElementById('picturesPur'); // Doit être une balise <img>
let bouton = document.getElementsByTagName('button')[0]; // Prend le premier bouton

let index = 0;
picture.src = pictures[index];

bouton.onclick = function() {
    index = (index + 1) % pictures.length; // Boucle sur les images
    picture.src = pictures[index];
};