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
let pictureCapture = document.querySelector('.social__caption');



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

console.log(socialComments[0]);

socialComments[0].children[0].src = getNewPost.comments[0].avatar;
socialComments[0].children[1].textContent = getNewPost.comments[0].message;

socialComments[1].querySelector('.social__picture').src = getNewPost.comments[1].avatar;
socialComments[1].querySelector('.social__text').textContent = getNewPost.comments[1].message;


  // <div class="social__comment-count">5 из <span class="comments-count">125</span> комментариев</div>
  // <ul class="social__comments">
  //   <li class="social__comment">
  //     <img class="social__picture" src="img/avatar-4.svg" alt="Аватар комментатора фотографии" width="35" height="35">
  //     <p class="social__text">Мега фото! Просто обалдеть. Как вам так удалось?</p>
  //   </li>
  //   <li class="social__comment">
  //     <img class="social__picture" src="img/avatar-3.svg" alt="Аватар комментатора фотографии" width="35" height="35">
  //      <p class="social__text">Да это фоташоп!!!!!!!!</p>
  //   </li>
  // </ul>


//   comments
// :
// Array(2)
// 0
// :
// {id: 1, avatar: 'img/avatar-6.svg', message: 'Лица у людей на фотке перекошены, как будто их изб…. Как можно было поймать такой неудачный момент?!', name: 'Petya'}
// 1
// :
// {id: 2, avatar: 'img/avatar-4.svg', message: 'Лица у людей на фотке перекошены, как будто их изб…. Как можно было поймать такой неудачный момент?!', name: 'Vera'}
// length
// :
// 2
// [[Prototype]]
// :
// Array(0)
// description
// :
// "Осень"
// id
// :
// 1
// likes
// :
// 10
// url
// :
// "photos/1.jpg"
