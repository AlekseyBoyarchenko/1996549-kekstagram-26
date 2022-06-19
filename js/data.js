import {getRandomNumber} from './util.js';

const MAX_PHOTOS_DESCRIPTION = 25;
const MAX_COMMENTS_PHOTO = MAX_PHOTOS_DESCRIPTION*2;

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

const idNumders = [];

for (let i = 1; i <= MAX_PHOTOS_DESCRIPTION; i++) {
  idNumders.push(i);
}

const commentIdNumders = [];

for (let i = 1; i <= MAX_COMMENTS_PHOTO; i++) {
  commentIdNumders.push(i);
}

function CreateComment () {
  return {
    id: commentIdNumders.shift(),
    avatar: `img/avatar-${getRandomNumber (1, 6)}.svg`,
    message: MESSAGES[getRandomNumber (0, MESSAGES.length-1)],
    name: NAMES[getRandomNumber (0, NAMES.length-1)],
  };
}

function CreateCommentList () {
  const COMMENT_COUNT = getRandomNumber(1,2);
  const COMMENT_PHOTO = Array.from({length: COMMENT_COUNT}, CreateComment);
  return COMMENT_PHOTO;
}

function CreatePhoto () {
  const id = idNumders.shift();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: DESCRIPTIONS[getRandomNumber (0, DESCRIPTIONS.length-1)],
    likes: getRandomNumber(15, 200),
    comments: CreateCommentList (),
  };
}

function createPhotosDecriptions () {
  return Array.from({length: MAX_PHOTOS_DESCRIPTION}, CreatePhoto);
}

export {createPhotosDecriptions};
