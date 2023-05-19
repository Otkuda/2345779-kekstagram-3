import {renderingThumbnail} from './draw.js';
import {checkError} from './util.js';
import {isFail, isSuccess} from './check.js';
import {closeWindow} from './form.js';


const SERVER_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

export const getData = function () {
  fetch(`${SERVER_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => renderingThumbnail(response))
    .catch(() => checkError('Ошибка подгрузки изображений!'));
};

export const postData = function (evt) {
  const data = new FormData(evt.target);
  fetch(SERVER_URL,
    {
      method: 'POST',
      body: data,
    },
  )
    .then((response) => {
      if (response.ok) {
        closeWindow(true);
        isSuccess();
      } else {
        closeWindow(false);
        isFail();
      }
    });
};

