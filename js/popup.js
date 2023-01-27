import './pictures.js';
import { getNewPost } from './pictures.js';

let previews = document.querySelectorAll('.picture');
let likes = document.querySelectorAll('.picture__likes');
let comments = document.querySelectorAll('.picture__comments');
let modalWindow = document.querySelector('.overlay');
let modalWindowClose = modalWindow.querySelector('.big-picture__cancel');
let bigPicture = document.querySelector('.big-picture__img').querySelector('img');
let likesNumber = modalWindow.querySelector('.likes-count');
let commentsNumber = modalWindow.querySelector('.comments-count');
let commentsCount = modalWindow.querySelector('.social__comment-count');
let commentsLoader = modalWindow.querySelector('.comments-loader');
let socialCommentsList = document.querySelector('.social__comments');
let pictureCapture = document.querySelector('.social__caption');
let socialComment = document.querySelector('.social__comment');
const fragmentComments = document.createDocumentFragment();

let modalClose = function (window) {

  document.addEventListener('keydown', (event) => {
    // ESCAPE key pressed
    if (event.key === "Escape") {
      window.classList.add('hidden');
     }
  });

};


//Отрисовываем комментарии вместо заглушки
let showComment = function (postComments) {
  for (let x = 0; x < postComments.length; x++) {
    let newComment = socialComment.cloneNode(true);
    let comment = postComments[x];

    newComment.querySelector('.social__picture').src = comment.avatar;
    newComment.querySelector('.social__text').textContent = comment.message;
    newComment.querySelector('.social__picture').alt = comment.name;

    fragmentComments.appendChild(newComment);
  }

  socialCommentsList.innerHTML = '';
  socialCommentsList.append(fragmentComments);
}

console.log(getNewPost);


//Открываем попап по клику, заполняем данными
let showPopup = function (preview, likes, comments, i) {
  let previewPicture = preview.querySelector('img');

       preview.addEventListener('click', function() {
       modalWindow.classList.remove('hidden');
       console.log('click');
        bigPicture.src = previewPicture.src;
        likesNumber.textContent = likes.textContent;
        commentsNumber.textContent = comments.textContent;
        pictureCapture.textContent = getNewPost[i].description;
        showComment(getNewPost[i].comments);
    });

  };



  for (let i = 0; i < previews.length; i++) {
    showPopup(previews[i], likes[i], comments[i], i);

  }

  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.querySelector('body').classList.add('modal-open');

//Закрываем модальное окно

modalWindowClose.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});


modalClose(modalWindow);

