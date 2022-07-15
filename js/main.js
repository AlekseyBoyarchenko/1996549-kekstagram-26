import {createRandomPhoto} from './preview-photos.js';
import './upload-form.js';
import {applyPhotoEffects} from './photo-effects.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {uploadFormSuccessSubmit, uploadFormErrorSubmit} from './submit-messages.js';
import {photoUploadFormSubmit} from './upload-form.js';

applyPhotoEffects();

getData(createRandomPhoto, showAlert);

photoUploadFormSubmit(uploadFormSuccessSubmit, uploadFormErrorSubmit);
