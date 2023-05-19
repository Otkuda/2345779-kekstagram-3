import {isESC} from './util.js';
import {resetEffect} from './effects.js';

const inputPicture = document.querySelector('#upload-file');
const buttonCancel = document.querySelector('#upload-cancel');

export const openWindow = () => {
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeOnButton);
};

inputPicture.addEventListener('change', () => {
  openWindow();
});

const cleanForm = () => {
  inputPicture.value = '';
  document.querySelector('.text__hashtags').value = '';
  document.querySelector('.text__description').value = '';
  resetEffect();
  document.querySelector('.scale__control--value').value = '100%';
};

export const closeWindow = (needToClean) => {
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeOnButton);
  if (needToClean) {
    cleanForm();
  }
};

function closeOnButton(evt) {
  if (isESC(evt)) {
    evt.preventDefault();
    closeWindow(true);
  }
}

buttonCancel.addEventListener('click', () => {
  closeWindow(true);
});


