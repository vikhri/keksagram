import './pictures.js';
import { getNewPost } from './pictures.js';

let previews = document.querySelectorAll('.picture');
let likes = document.querySelectorAll('.picture__likes');
let comments = document.querySelectorAll('.picture__comments');
let modalWindow = document.querySelector('.overlay');
let bigPicture = document.querySelector('.big-picture__img').children[0];
let likesNumber = modalWindow.querySelector('.likes-count');
let commentsNumber = modalWindow.querySelector('.comments-count');
let commentsCount = modalWindow.querySelector('.social__comment-count');
let commentsLoader = modalWindow.querySelector('.comments-loader');



let showPopup = function (preview, likes, comments) {
      preview.addEventListener('click', function() {
      modalWindow.classList.remove('hidden');
      bigPicture.src = preview.children[0].src;
      likesNumber.textContent = likes.textContent;
      commentsNumber.textContent = comments.textContent;
  });

  };

  for (let i = 0; i < previews.length; i++) {
    showPopup(previews[i], likes[i], comments[i]);

  }

  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.querySelector('body').classList.add('modal-open');


