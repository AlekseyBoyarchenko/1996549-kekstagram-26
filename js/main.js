import {createRandomPhoto} from './preview-photos.js';
import './upload-form.js';
import {applyPhotoEffects} from './photo-effects.js';
import {getData} from './api.js';
import {showAlert, randomIndexPhoto, sortPhotoComments, debounce} from './util.js';
import {uploadFormSuccessSubmit, uploadFormErrorSubmit} from './submit-messages.js';
import {photoUploadFormSubmit} from './upload-form.js';
import {defaultSorting, randomSorting, popularSorting} from './sort-photos.js';
import {loadUserPhoto} from './user-photo-load.js';

const TIME_OUT_DELAY = 500;
const RANDOM_PHOTO_AMOUNT = 10;

applyPhotoEffects();

getData((photos) => {
  const photoFilters = document.querySelector('.img-filters');
  photoFilters.classList.remove('img-filters--inactive');

  createRandomPhoto(photos);

  defaultSorting(debounce(() => createRandomPhoto(photos), TIME_OUT_DELAY));

  randomSorting(debounce(() => createRandomPhoto(randomIndexPhoto(photos.slice()).slice(0, RANDOM_PHOTO_AMOUNT)), TIME_OUT_DELAY));

  popularSorting(debounce(() => createRandomPhoto(photos.slice().sort(sortPhotoComments)), TIME_OUT_DELAY));
}, showAlert);

photoUploadFormSubmit(uploadFormSuccessSubmit, uploadFormErrorSubmit);

loadUserPhoto();
