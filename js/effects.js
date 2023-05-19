const effects = document.querySelector('.effects__list');
const picture = document.querySelector('.img-upload__preview');
let previousEffect = 'none';
const  effectNone = document.querySelector('#effect-none');

effects.addEventListener('change', (evt) => {
  for (const className of picture.classList) {
    if (className.startsWith('effects__preview--')) {
      picture.classList.remove(className);
    }
  }
  picture.classList.add(`effects__preview--${evt.target.value}`);
  previousEffect = evt.target.value;
});

export const resetEffect = () => {
  picture.classList.remove(`effects__preview--${previousEffect}`);
  picture.style.filter = '';
  previousEffect = undefined;
  picture.style.scale = 1;
  effectNone.checked = true;
};
