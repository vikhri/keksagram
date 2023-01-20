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
let socialComments = document.querySelectorAll('.social__comment');
let socialCommentsList = document.querySelector('.social__comments');
let pictureCapture = document.querySelector('.social__caption');
let socialComment = document.querySelector('.social__comment');


let showPopup = function (preview, likes, comments, i) {
      preview.addEventListener('click', function() {
      modalWindow.classList.remove('hidden');
      bigPicture.src = preview.children[0].src;
      likesNumber.textContent = likes.textContent;
      commentsNumber.textContent = comments.textContent;
      pictureCapture.textContent = getNewPost[i].description;
  });

  };

  for (let i = 0; i < previews.length; i++) {
    showPopup(previews[i], likes[i], comments[i], i);

  }

  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  document.querySelector('body').classList.add('modal-open');

  console.log(getNewPost);

// добвление описания

pictureCapture.textContent = getNewPost[1].description;

//Отрисовка комментариев

console.log(socialComment);
console.log(getNewPost[2].comments[0].avatar);

//засунуть комментарии в фрагмент
const fragmentComments = document.createDocumentFragment();

//const postComments = getNewPost[0].comments;

test(getNewPost[0].comments);

function test(postComments) {
  for (let x = 0; x < postComments.length; x++) {
    const comment = postComments[x];
    let newComment = socialComment.cloneNode(true);

    newComment.children[0].src = postComments[x].avatar;
    newComment.children[1].textContent = postComments[x].message;
    newComment.children[0].alt = postComments[x].name;

    fragmentComments.appendChild(newComment);
  }

  socialCommentsList.innerHTML = '';
  socialCommentsList.after(fragmentComments);
}



