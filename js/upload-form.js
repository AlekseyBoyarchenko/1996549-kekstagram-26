import {isEscapeKey} from './util.js';
import {getStartZoomValue, addClickZoomButton} from './zoom-photo.js';
import {resetPhotoEffects} from './photo-effects.js';

const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const photoEdit = document.querySelector('.img-upload__overlay');
const photoUploadForm = document.querySelector('.img-upload__form');
const closeFormButton = photoEdit.querySelector('#upload-cancel');
const textHashtags = photoUploadForm.querySelector('.text__hashtags');
const textComment = photoUploadForm.querySelector('.text__description');

const MAX_HASHTAGS_AMOUNT = 5;
const CORRECT_HASHTAG_MESSAGE = 'Не корректный хэштег';
const ORIGINAL_HASHTAG_MESSAGE = 'Хэштеги не должны повторяться';
const AMOUNT_HASHTAG_MESSAGE = 'Можно добавить не более пяти хэштегов';

function onFormEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadForm ();
  }
}

function openUploadForm () {
  photoEdit.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscKeydown);
  getStartZoomValue();
  addClickZoomButton();
  resetPhotoEffects();
}

uploadFile.addEventListener('change', openUploadForm);

function closeUploadForm () {
  photoEdit.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscKeydown);
  photoUploadForm.reset();
}

closeFormButton.addEventListener('click', closeUploadForm);

function onNotEscKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
}

textHashtags.addEventListener('keydown', onNotEscKeydown);
textComment.addEventListener('keydown', onNotEscKeydown);

const pristine = new Pristine (photoUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

function hashtagCheckCorrect (value) {
  const hashtags = value.trim().toLowerCase().split(' ');
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return value === ''|| hashtags.every((hashtag) => re.test(hashtag));
}

pristine.addValidator(textHashtags, hashtagCheckCorrect, CORRECT_HASHTAG_MESSAGE);

function hashtagCheckAmount (value) {
  const hashtags = value.trim().toLowerCase().split(' ');
  return hashtags.length <= MAX_HASHTAGS_AMOUNT;
}

pristine.addValidator(textHashtags, hashtagCheckAmount, AMOUNT_HASHTAG_MESSAGE);

function hashtagCheckOriginal (value) {
  const hashtags = value.trim().toLowerCase().split(' ');
  return new Set(hashtags).size === hashtags.length;
}

pristine.addValidator(textHashtags, hashtagCheckOriginal, ORIGINAL_HASHTAG_MESSAGE);

photoUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    photoUploadForm.submit();
  }
});
