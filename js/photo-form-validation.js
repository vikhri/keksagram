let photoForm = document.getElementById('upload-select-image');

// let defaultConfig = {
//   // class of the parent element where the error/success class is added
//   classTo: 'img-upload__text',
//   // errorClass: 'has-danger',
//   // successClass: 'has-success',
//   // class of the parent element where error text element is appended
//   errorTextParent: 'img-upload__text',
//   // type of element to create for the error text
//   errorTextTag: 'p',
//   // class of the error text element
//   // errorTextClass: 'text-help'
// };

let pristines = new Pristine(photoForm, defaultConfig);

photoForm.addEventListener('submit', (evt) => {
   evt.preventDefault();

   const isValid = pristines.validate();

  if (isValid) {
     console.log('Можно отправлять, всё ок');
   } else {
     console.log('Нельзя отправлять. Форма невалидна');
   }
 });

