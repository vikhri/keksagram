// Задача 1. Функция возвращает случ. целое число из диапазона

let GetRandomNumber = (min, max) => {

  if (!IsRangeValid(min, max)) {
    console.log('Error. Range Invalid');
    return null
  }

  if (!IsPositive(min,max)) {
    console.log('Error. Range Not Positive');
    return null
  }

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);

};

// Функция проверяет, что второе число в диапазоне больше первого

let IsRangeValid = (min, max) => {
  return min < max;

};

//Функция проверяет, что числа в положит. диапазоне

let IsPositive = (min, max) => {
  return (min >= 0 && max > 0);
}

// Тесты
console.log("Число из заданного диапазона:", GetRandomNumber(0,10)); //ok



//Задача 2. Функция для проверки максимальной длины строки.
//имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит

let CheckStringLength = (input, maxlength) => {
  return input.length <= maxlength;
};

console.log(CheckStringLength('Привет!', 7));




// 4. Создать массив из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.


// Вспомогательна функция, которая генерирует массив чисел от 1 до 25
let GetRange = () => {
  return  Array.from({ length: 25}, (_, i) => 1 + i);
  };

// Функция с массивом из 25-ти ID
let IdList = GetRange().slice();
console.log('Массив айди ', IdList);

// Функция, которая генерирует массив из 25-ти урл картинки
let UrlList = GetRange().map(x => 'photos/' + x + '.jpg')
console.log('массив урлов: ', UrlList);

// Массив с описаниями фотографий
let descriptionList = ['Лето', 'Море', 'Коты', 'Дети', 'Дома','Реки', 'Ветки', 'Зима', 'Осень', 'Листья','Книги', 'Перья', 'Ноги', 'Руки', 'Окна','Звери', 'Люди', 'Кепки', 'Леди', 'Кони','Пони', 'Воры', 'Лень', 'Тень', 'День' ];


//Функция для рандомного числа лайков от 1 до 200.
GetRandomNumber(0,200);


// Функция для создания массива объектов из комментариев

let autorNames = [ 'Kolya', 'Petya' , 'Olya' , 'Vera'];
let messageList = ['Всё отлично!',' В целом всё неплохо. Но не всё.', ' Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.' , 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!']

let CreateComment = () => {

  let commentsList = [];
  for (let i = 1; i < 25; i++) {

    commentsList.push(
      {
      id: i,
      avatar: 'img/avatar-'+ GetRandomNumber(1,6) +'.svg',
      message: messageList[GetRandomNumber(0, messageList.length - 1)],
      name: autorNames[GetRandomNumber(0, autorNames.length - 1)],
      }
    );
  };
  return commentsList;
};

console.log('Список комментариев' , CreateComment());


// Функция, которая создаст конечный объект

let CreatePost = () => {
  let objectsList = [];
  for (let i = 0; i < 25 ; i++) {

    objectsList.push(
      {
      id: IdList[i],
      url: UrlList[i],
      description: descriptionList[i],
      likes: GetRandomNumber(0,200),
      comments: CreateComment()[i],
      }
    );
  };
  return objectsList;
};


console.log('кочнечный список объектов:' , CreatePost());


