import './pictures.js';

let previews = document.querySelectorAll('.picture');
let modalWindow = document.querySelector('.overlay');
let bigPictureSrc = document.querySelector('.big-picture__img').children[0].src;
console.log(bigPictureSrc)
console.log(previews[1].children[0].src);


let showPopup = function (preview) {
      preview.addEventListener('click', function() {
      console.log('тыкнули на картинку №' + preview.id)
      modalWindow.classList.remove('hidden');

    });
  };

  for (let i = 0; i < previews.length; i++) {
    showPopup(previews[i]);
  }




// не забыть принять новую разметку.

