const imgUploadValue = document.getElementById('upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const docBody = document.querySelector('body');
const modalWindowClose = imgUploadOverlay.querySelector('.img-upload__cancel');
function сloseOnEscape(window, input) {

  document.addEventListener('keydown', (event) => {
    // ESCAPE key pressed
    if (event.key === "Escape") {
      window.classList.add('hidden');
      deleteValue(input);
    }
  });

}

let deleteValue = (input) => {
  input.value = '';
};



imgUploadValue.addEventListener('change' , (evt) => {
    console.log(`You choose ${evt.target.value}`);

    imgUploadOverlay.classList.remove('hidden');
    docBody.classList.add('modal-open');
  });

  modalWindowClose.addEventListener('click', () => {
    imgUploadOverlay.classList.add('hidden');
    deleteValue(imgUploadValue);
  });

  сloseOnEscape(imgUploadOverlay, imgUploadValue);

