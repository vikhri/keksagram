// Функция для проверки максимальной длины строки.
//имя_функции(проверяемая_строка, максимальная_длина); // Результат: true, если строка проходит по длине, и false — если не проходит

const CheckStringLength = (input, maxlength) => {
    return input.length <= maxlength;
  };

  console.log(CheckStringLength('Привет!', 7));


export {CheckStringLength};
