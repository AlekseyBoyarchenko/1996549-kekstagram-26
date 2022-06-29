import {isEscapeKey} from './util.js';

function createRandomFullPhoto (photos) {

  const body = document.querySelector('body');
  const previewPhoto = document.querySelectorAll('.picture');
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

  function addPhotoClickHandler (photo, {url, likes, description, comments}) {
    photo.addEventListener('click', () => {
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
    });
  }

  for (let i = 0; i < previewPhoto.length; i++) {
    addPhotoClickHandler(previewPhoto[i], photos[i]);
  }

  closeButton.addEventListener ('click', closeFullPhoto);
}

export { createRandomFullPhoto };
