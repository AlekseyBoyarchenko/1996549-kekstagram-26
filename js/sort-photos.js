const photoFilters = document.querySelector('.img-filters');
const sortDefaultButton = photoFilters.querySelector('#filter-default');
const sortRandomButton = photoFilters.querySelector('#filter-random');
const sortPopulartButton = photoFilters.querySelector('#filter-discussed');

const changeClassButtons = (activeButton) => {
  photoFilters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  activeButton.classList.add('img-filters__button--active');
};

const defaultSorting = (cb) => {
  sortDefaultButton.addEventListener('click', () => {
    changeClassButtons(sortDefaultButton);
    cb();
  });
};

const randomSorting = (cb) => {
  sortRandomButton.addEventListener('click', () => {
    changeClassButtons(sortRandomButton);
    cb();
  });
};

const popularSorting = (cb) => {
  sortPopulartButton.addEventListener('click', () => {
    changeClassButtons(sortPopulartButton);
    cb();
  });
};

export {defaultSorting, randomSorting, popularSorting};
