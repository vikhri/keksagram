// Функция для создания массива объектов из комментариев

import { GetRandomNumber } from "./math.js";

let autorNames = [ 'Kolya', 'Petya' , 'Olya' , 'Vera'];
let messageList = ['Всё отлично!',' В целом всё неплохо. Но не всё.', ' Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.' , 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']

let CreateComment = (id) => {
      return {
      id: id,
      avatar: 'img/avatar-'+ GetRandomNumber(1,6) +'.svg',
      message: messageList[GetRandomNumber(0, messageList.length - 1)],
      name: autorNames[GetRandomNumber(0, autorNames.length - 1)],
      };
};


let CreateCommentList = () => {
let CommentsList = [];
  for (let i = 1; i < GetRandomNumber(2,5) ; i++) {
    CommentsList.push(CreateComment(i));
  };
return CommentsList;
}

export {CreateCommentList};

