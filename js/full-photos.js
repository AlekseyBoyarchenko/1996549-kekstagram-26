import {isEscapeKey} from './util.js';

const body = document.querySelector('body');
const fullPhoto = document.querySelector('.big-picture');
const photoImage = fullPhoto.querySelector('.big-picture__img').querySelector('img');
const likesCount = fullPhoto.querySelector('.likes-count');
const commentsList = fullPhoto.querySelector('.social__comments');
const commentItem = commentsList.querySelector('.social__comment');
const photoDescription = fullPhoto.querySelector('.social__caption');
const commentCounter = fullPhoto.querySelector('.social__comment-count');
const commentLoader = fullPhoto.querySelector('.comments-loader');
const closeButton = fullPhoto.querySelector('.big-picture__cancel');

const commentListFragment = document.createDocumentFragment();

function onFullPhotoEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullPhoto ();
  }
}

function closeFullPhoto () {
  fullPhoto.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFullPhotoEscKeydown);
}

closeButton.addEventListener ('click', closeFullPhoto);

function createRandomFullPhoto ({url, likes, description, comments}) {
  fullPhoto.classList.remove('hidden');
  commentCounter.classList.add('hidden');
  commentLoader.classList.add('hidden');
  body.classList.add('modal-open');

  photoImage.src = url;
  likesCount.textContent = likes;
  photoDescription.textContent = description;

  commentsList.textContent = '';

  comments.forEach((comment) => {
    const commentElementCopy = commentItem.cloneNode(true);
    const commentAvatar = commentElementCopy.querySelector('.social__comment .social__picture');
    const commentMesssage = commentElementCopy.querySelector('.social__comment .social__text');
    commentAvatar.src = comment.avatar;
    commentAvatar.alt = comment.name;
    commentMesssage.textContent = comment.message;
    commentListFragment.append(commentElementCopy);
  });

  commentsList.append(commentListFragment);

  document.addEventListener('keydown', onFullPhotoEscKeydown);
}

export { createRandomFullPhoto };
