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

