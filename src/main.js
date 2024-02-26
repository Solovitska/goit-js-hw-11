import { getImages } from './js/pixabay-api';

const fetchUsersBtn = document.querySelector('button[data-start]');
const input = document.querySelector('#data-search');

fetchUsersBtn.addEventListener('click', () => {
  const nameImage = input.value.trim();
  if (nameImage !== '') {
    getImages(nameImage.trim());
  }
});