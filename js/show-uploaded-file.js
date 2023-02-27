let preview = document.querySelector('.img-upload__preview img');
let fileChooser = document.querySelector('.img-upload__input');


fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  preview.src = URL.createObjectURL(file);
});
