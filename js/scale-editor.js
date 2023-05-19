const zoomIn = document.querySelector('.scale__control--bigger');
const zoomOut = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');
const previewPic = document.querySelector('.img-upload__preview');

const changeScale = (newScaleValue) => {
  scaleInput.value = `${newScaleValue}%`;
  previewPic.style.scale = newScaleValue / 100;
};

zoomIn.addEventListener('click', () => {
  const curScaleValue = Number(scaleInput.value.slice(0, -1));
  if (curScaleValue !== 100) {
    changeScale(curScaleValue + 25);
  }
});

zoomOut.addEventListener('click', () => {
  const curScaleValue = Number(scaleInput.value.slice(0, -1));
  if (curScaleValue !== 25) {
    changeScale(curScaleValue - 25);
  }
});

