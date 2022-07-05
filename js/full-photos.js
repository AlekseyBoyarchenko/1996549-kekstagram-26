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

const MAX_COMMENTS_AMOUNT = 5;

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
  body.classList.add('modal-open');

  photoImage.src = url;
  likesCount.textContent = likes;
  photoDescription.textContent = description;

  let commentCount = 0;

  function commentsAdd () {
    comments.slice(0, commentCount += MAX_COMMENTS_AMOUNT).forEach((comment) => {
      const commentElementCopy = commentItem.cloneNode(true);
      const commentAvatar = commentElementCopy.querySelector('.social__comment .social__picture');
      const commentMesssage = commentElementCopy.querySelector('.social__comment .social__text');
      commentAvatar.src = comment.avatar;
      commentAvatar.alt = comment.name;
      commentMesssage.textContent = comment.message;
      commentListFragment.append(commentElementCopy);
    });

    commentsList.textContent = '';
    commentsList.append(commentListFragment);

    if (commentCount >= comments.length) {
      commentLoader.classList.add('hidden');
      commentCounter.textContent = `${comments.length} из ${comments.length} комментариев`;
    }
    else {
      commentLoader.classList.remove('hidden');
      commentCounter.textContent = `${commentCount} из ${comments.length} комментариев`;
    }
  }

  commentsAdd();

  commentLoader.addEventListener ('click', () => {
    commentsAdd();
  });

  document.addEventListener('keydown', onFullPhotoEscKeydown);
}

export { createRandomFullPhoto };
