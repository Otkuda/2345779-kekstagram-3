import {checkStr} from './util.js';
import {postData} from './api.js';

const form = document.querySelector('.img-upload__form');
const reg = /^#[а-яА-ЯA-Za-zёЁ0-9]{1,17}$/;
const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error',
});
const validateHashtag = (element) => reg.test(element) || checkStr(element, 0);
const validateComment = (element) => !checkStr(element, 19) && checkStr(element, 140);

pristine.addValidator(document.querySelector('.text__hashtags'), validateHashtag, 'Хэштег не должен привышать 17 символов и обязан начинаться с решётки!');
pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Длина комментария от 20 до 140 символов!');

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    postData(evt);
  }
});
