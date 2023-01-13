import { CreatePost } from './get-posts.js';

let getNewPost = CreatePost(25);

const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');
const pictureTitle = picturesList.querySelector('h2');
const fragment = document.createDocumentFragment();

pictureTitle.classList.remove('visually-hidden');


for (let i=0 ; i < getNewPost.length; i++) {
let newPost = pictureTemplate.cloneNode(true);

newPost.querySelector('img').src = getNewPost[i].url;
newPost.querySelector('.picture__comments').textContent = getNewPost[i].comments.length;
newPost.querySelector('.picture__likes').textContent = getNewPost[i].likes;

fragment.appendChild(newPost);
};

pictureTitle.after(fragment);
//picturesList.insertAdjacentHTML('afterbegin', fragment);

console.log(picturesList.children);
