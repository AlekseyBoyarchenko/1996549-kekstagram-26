function createRandomPhoto (photos) {
  const previewUsersPhotos = document.querySelector('.pictures');
  const randomPhotoTemplete = document.querySelector('#picture').content.querySelector('.picture');

  const previewUsersPhotosFragment = document.createDocumentFragment();

  photos.forEach(({url, likes, comments}) => {
    const previewPhoto = randomPhotoTemplete.cloneNode(true);
    previewPhoto.querySelector('img').src = url;
    previewPhoto.querySelector('.picture__likes').textContent = likes;
    previewPhoto.querySelector('.picture__comments').textContent = comments.length;
    previewUsersPhotosFragment.append(previewPhoto);
  });

  previewUsersPhotos.append(previewUsersPhotosFragment);
}

export { createRandomPhoto };
