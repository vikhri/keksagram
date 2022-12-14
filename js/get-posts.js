//Функция для генерации данных

import { GetRandomNumber } from './math.js';
import { CreateCommentList } from './get-comments.js';


// Получаем  ID
let GetID = (number) => {
    return number;
  }

// Получаем урл картинки
let GetUrl = (number) => {
  return ('photos/' + number + '.jpg');
  }


// Массив с описаниями фотографий
  let descriptionList = ['Лето', 'Море', 'Коты', 'Дети', 'Дома','Реки', 'Ветки', 'Зима', 'Осень', 'Листья','Книги', 'Перья', 'Ноги', 'Руки', 'Окна','Звери', 'Люди', 'Кепки', 'Леди', 'Кони','Пони', 'Воры', 'Лень', 'Тень', 'День' ];


// Функция, которая создаст конечный объект

  let CreatePost = () => {
    let objectsList = [];
    for (let i = 1; i <= 15 ; i++) {

      objectsList.push(
        {
        id: GetID(i),
        url: GetUrl(i),
        description: descriptionList[GetRandomNumber(0,24)],
        likes: GetRandomNumber(0,200),
        comments: CreateCommentList(),
        }
      );
    };
    return objectsList;
  };


  console.log('кочнечный список объектов:' , CreatePost());

export {CreatePost};
