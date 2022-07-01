import {createRandomFullPhoto} from './full-photos.js';

function createRandomPhoto (photos) {
  const previewUsersPhotos = document.querySelector('.pictures');
  const randomPhotoTemplete = document.querySelector('#picture').content.querySelector('.picture');

  const previewUsersPhotosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const {url, likes, comments} = photo;
    const previewPhoto = randomPhotoTemplete.cloneNode(true);
    previewPhoto.querySelector('img').src = url;
    previewPhoto.querySelector('.picture__likes').textContent = likes;
    previewPhoto.querySelector('.picture__comments').textContent = comments.length;
    previewPhoto.addEventListener('click', () => createRandomFullPhoto(photo));
    previewUsersPhotosFragment.append(previewPhoto);
  });

  previewUsersPhotos.append(previewUsersPhotosFragment);
}

export { createRandomPhoto };
