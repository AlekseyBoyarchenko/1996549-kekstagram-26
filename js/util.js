const ERROR_TIME = 5000;

const getRandomNumber = (min, max) => {
  const minNumber = Math.min(Math.abs(min), Math.abs(max));
  const maxNumber = Math.max(Math.abs(min), Math.abs(max));
  return Math.floor(minNumber + Math.random() * (maxNumber - minNumber + 1));
};

const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = () => {
  const error = document.createElement('div');
  error.style.zIndex = '100';
  error.style.position = 'absolute';
  error.style.left = '0';
  error.style.top = '0';
  error.style.right = '0';
  error.style.padding = '10px 3px';
  error.style.fontSize = '24px';
  error.style.textAlign = 'center';
  error.style.color = 'red';
  error.style.backgroundColor = 'black';

  error.textContent = 'Не получилось загрузить информацию';

  document.body.append(error);

  setTimeout(() => {
    error.remove();
  }, ERROR_TIME);
};

const randomIndexPhoto = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = getRandomNumber(0, i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const sortPhotoComments = (photoA, photoB) => (photoB.comments.length - photoA.comments.length);

const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomNumber, checkStringLength, isEscapeKey, showAlert, randomIndexPhoto, sortPhotoComments, debounce};
