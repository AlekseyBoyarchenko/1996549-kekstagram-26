function getRandomNumber (min, max) {
  const minNumber = Math.min(Math.abs(min), Math.abs(max));
  const maxNumber = Math.max(Math.abs(min), Math.abs(max));
  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
}

function checkStringLength (string, maxLength) {
  return string.length <= maxLength;
}

function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

export {getRandomNumber, checkStringLength, isEscapeKey};
