// Sélectionne toutes les images du carrousel
let images = document.querySelectorAll('.img-container img')
let totalImages = images.length;

// Sélectionne les boutons précédent et suivant
let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')

// Sélectionne tous les boutons de navigation (petits ronds sous le carrousel)
let selectedImgBtns = document.querySelectorAll('.img-nav-item')

// Indice de l'image actuellement affichée
let currentImgId = 0;

// Fonction pour masquer toutes les images
let hideAllImages = () => {
  images.forEach(img => {
    // Si l'image est visible, on la masque
    if (img.classList[0] === 'visible') {
      img.classList.remove('visible')
      img.classList.add('hidden')
    }
  })
}

// Fonction pour naviguer entre les images (précédente ou suivante)
let traverseImages = (direction) => {
  hideAllImages()
  
  // Met à jour l'indice de l'image courante selon la direction
  if (direction === 'prev') {
    currentImgId = currentImgId ? (currentImgId - 1) % totalImages : totalImages - 1
  } else {
    currentImgId = (currentImgId + 1) % totalImages
  }
  
  // Affiche la nouvelle image courante
  images[currentImgId].classList.remove('hidden')
  images[currentImgId].classList.add('visible')
  
  // Met à jour la sélection des boutons de navigation
  selectedImgBtns.forEach(btn => btn.classList.remove('img-nav-item-selected'))
  selectedImgBtns[currentImgId].classList.add('img-nav-item-selected')
}

// Fonction appelée quand on clique sur un bouton de navigation (rond)
let handleBtnClick = (btn, i) => {
  // Si le bouton est déjà sélectionné, on ne fait rien
  if (btn.classList.forEach(btnClass => {
    if (btnClass === 'img-nav-item-selected') {
      return true
    }
  })) {
    return
  }
  
  // Met à jour la sélection des boutons
  selectedImgBtns.forEach(btn => btn.classList.remove('img-nav-item-selected'))
  btn.classList.add('img-nav-item-selected')
  hideAllImages()
  currentImgId = i
  images[currentImgId].classList.remove('hidden')
  images[currentImgId].classList.add('visible')
}

// Ajoute les événements de clic sur les boutons précédent et suivant
prevBtn.addEventListener('click', () => traverseImages('prev'))
nextBtn.addEventListener('click', () => traverseImages('next'))

// Ajoute les événements de clic sur les boutons de navigation (ronds)
selectedImgBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => handleBtnClick(btn, i))
})