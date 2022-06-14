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

const MAX_PHOTOS_DESCRIPTION = 25;

const NAMES = [
  'Вася',
  'Петя',
  'Оля',
  'Хорхе',
  'Джон',
  'Гоша',
  'Валя',
  'Женя',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Какие цвета!',
  'Как Вам?',
  'Вот так это делается!',
  'Просто',
  'Нет слов',
  'А вы как думали?!',
  'Как Вам ракурс?',
  'Как-то так...',
];

const photoIdArr = [];

for (let i=1; i<=MAX_PHOTOS_DESCRIPTION; i++) {
  photoIdArr.push(i);
}

const commentIdArr = [];

for (let i=1; i<=1000; i++) {
  commentIdArr.push(i);
}

function createComment () {
  return {
    id: commentIdArr.shift(),
    avatar: `img/avatar-${getRandomNumber (1, 6)}.svg`,
    message: MESSAGES[getRandomNumber (0, MESSAGES.length-1)],
    name: NAMES[getRandomNumber (0, NAMES.length-1)],
  };
}

function createCommentList () {
  const COMMENT_COUNT = getRandomNumber(1,2);
  const COMMENT_PHOTO = Array.from({length: COMMENT_COUNT}, createComment);
  return COMMENT_PHOTO;
}

function createPhoto () {
  const ID = photoIdArr.shift();
  return {
    ID,
    url: `photos/${ID}.jpg`,
    description: DESCRIPTIONS[getRandomNumber (0, DESCRIPTIONS.length-1)],
    likes: getRandomNumber(15, 200),
    comments: createCommentList (),
  };
}

const PHOTO = Array.from({length: MAX_PHOTOS_DESCRIPTION}, createPhoto);
