import { renderPictures, clearRenderedPictures } from "./pictures.js";

let applyFilter = (data) => {

let defaultFilterButton = document.getElementById('filter-default');
let randomFilterButton = document.getElementById('filter-random');
let commentFilterButton = document.getElementById('filter-discussed');


defaultFilterButton.addEventListener('click', () => {
  clearRenderedPictures();
  renderPictures(data, 'default');
});

randomFilterButton.addEventListener('click', () => {
  clearRenderedPictures();
  renderPictures(data, 'random');
});

commentFilterButton.addEventListener('click', () => {
  clearRenderedPictures();
  renderPictures(data, 'mostcomment');
});

};


//Функция сравнния по количеству комментариев у поста

let compareCommentsNumber = function(a, b) {
  return b.comments.length - a.comments.length;
};


export {compareCommentsNumber};

export {applyFilter};

// функция сортировки по колву комментариев +
// функция "сортировки" возврщающая 10 случайных

// по клику на одну кнопку должна взвываться функция отрисовки картинкок. в функцию передаем доп. аргумент фильтра () => {отрисовка(знач. фильтра)}

// внутри функции отрисовки картинок мы копируем массив, сортируем массив одними из способов (способ передаем аргументом).


