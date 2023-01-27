const imgUploadValue = document.getElementById('upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const docBody = document.querySelector('body');
const modalWindowClose = imgUploadOverlay.querySelector('.img-upload__cancel');
let modalClose = function (window) {

  document.addEventListener('keydown', (event) => {
    // ESCAPE key pressed
    if (event.key === "Escape") {
      window.classList.add('hidden');
     }
  });

};



imgUploadValue.addEventListener('change' , (evt) => {
    console.log(`You choose ${evt.target.value}`);

    imgUploadOverlay.classList.remove('hidden');
    docBody.classList.add('modal-open');
  });

  modalWindowClose.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
  });

  modalClose(imgUploadOverlay);
