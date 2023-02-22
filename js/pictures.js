import { CreatePost } from './get-posts.js';

// let getNewPost = CreatePost(15); убираем временные данные

const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');
const pictureTitle = picturesList.querySelector('h2');
const fragment = document.createDocumentFragment();

pictureTitle.classList.remove('visually-hidden');

// export {getNewPost};

let renderPictures = (posts) => {

for (let i=0 ; i < posts.length; i++) {
let newPost = pictureTemplate.cloneNode(true);

newPost.querySelector('img').src = posts[i].url;
newPost.querySelector('.picture__comments').textContent = posts[i].comments.length;
newPost.querySelector('.picture__likes').textContent = posts[i].likes;
newPost.querySelector('a').id = posts[i].id;

fragment.appendChild(newPost);
};

pictureTitle.after(fragment);

};

export {renderPictures};
