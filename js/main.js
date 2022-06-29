import {createPhotosDecriptions} from './data.js';
import {createRandomPhoto} from './preview-photos.js';
import {createRandomFullPhoto} from './full-photos.js';

const PhotosDecriptions = createPhotosDecriptions();

createRandomPhoto(PhotosDecriptions);
createRandomFullPhoto(PhotosDecriptions);
