
import { showResult } from './render-functions';
const API_KEY = '42574580-2c52a100a2b29f75d1ac631cf';

const isVisible = document.querySelector('.isVisible');
const classes = isVisible.classList;

export function getImages(name) {
  classes.toggle('isVisible', false);
  const URL =
    'https://pixabay.com/api/?key=' +
    API_KEY +
    '&q=' +
    encodeURIComponent(name) +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true';

  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      classes.toggle('isVisible', true);
      return response.json();
    })
    .then(result => {
      // Дані від бекенда
      showResult(result);
    })
    .catch(error => console.log(error));
}