import {createPhotosDecriptions} from './data.js';
import {createRandomPhoto} from './preview-photos.js';
import {createRandomFullPhoto} from './full-photos.js';

const PHOTO = createPhotosDecriptions();

createRandomPhoto(PHOTO);
createRandomFullPhoto(PHOTO);
