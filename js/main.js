function getRandomNumber (min, max) {
  if (0 <= min && min < max) {
    return Math.round(Math.random() * (max - min) + min);
  } else {
    return 'Числа диапазона должны быть больше или равны нулю, а также значание "от" должно быть меньше значения "до"';
  }
}

getRandomNumber(1,77);

function checkStringLength (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
}

checkStringLength ('141',140);
