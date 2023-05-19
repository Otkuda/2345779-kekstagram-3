const container = document.querySelector('.pictures');
const usersPictureTemplate = document.querySelector('#picture').content;

export const renderingThumbnail = (getObjects) => {
  const usersPicturesFragment = document.createDocumentFragment();

  getObjects.forEach(({url, likes, comments}) => {
    const pictureElement = usersPictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments;

    usersPicturesFragment.appendChild(pictureElement);
  });
  container.appendChild(usersPicturesFragment);
};
