import {createPhotosDecriptions} from './data.js';
import {createRandomPhoto} from './preview-photos.js';
import './upload-form.js';
import {applyPhotoEffects} from './photo-effects.js';

createRandomPhoto(createPhotosDecriptions());
applyPhotoEffects();
