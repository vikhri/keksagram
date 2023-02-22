import { CreatePost } from './get-posts.js';
import { compareCommentsNumber } from './show-filtered-pics.js';
import { GetRandomNumber } from './math.js';

// let getNewPost = CreatePost(15); убираем временные данные

const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');
const pictureTitle = picturesList.querySelector('.pictures__title');
const fragment = document.createDocumentFragment();

// pictureTitle.classList.remove('visually-hidden');

// export {getNewPost};

let renderPictures = (posts, filterStatus) => {

let randomStart = GetRandomNumber(0,15);
let postsFiltered;

switch (filterStatus) {
  case 'random':
    postsFiltered = posts.slice( randomStart, (randomStart + 10));
    break;
  case 'mostcomment':
    postsFiltered = posts.slice().sort(compareCommentsNumber);
    break;
  default:
    postsFiltered = posts;
}


for (let i=0 ; i < postsFiltered.length; i++) {
let newPost = pictureTemplate.cloneNode(true);

newPost.querySelector('img').src = postsFiltered[i].url;
newPost.querySelector('.picture__comments').textContent = postsFiltered[i].comments.length;
newPost.querySelector('.picture__likes').textContent = postsFiltered[i].likes;
newPost.querySelector('a').id = postsFiltered[i].id;

fragment.appendChild(newPost);
};

pictureTitle.after(fragment);

};



 let clearRenderedPictures = () => {

   let renderedPictures = picturesList.querySelectorAll('.picture');
    renderedPictures.forEach((picture) => picture.remove());

};

export {renderPictures, clearRenderedPictures};

