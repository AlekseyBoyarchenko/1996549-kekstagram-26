function createRandomPhoto (photo) {
  const previewUsersPhotos = document.querySelector('.pictures');
  const randomPhotoTemplete = document.querySelector('#picture').content;
  const randomPhotoElement = randomPhotoTemplete.querySelector('.picture');

  const previewUsersPhotosFragment = document.createDocumentFragment();

  photo.forEach(({url, comments, likes}) => {
    const previewPhoto = randomPhotoElement.cloneNode(true);
    previewPhoto.querySelector('.picture__img').src = url;
    previewPhoto.querySelector('.picture__comments').textContent = comments.length;
    previewPhoto.querySelector('.picture__like').textContent = likes;
    previewUsersPhotosFragment.append(previewPhoto);
  });

  previewUsersPhotos.append(previewUsersPhotosFragment);
}

export {createRandomPhoto};
