import { showResult } from './render-functions';
const API_KEY = '42515618-500ad6d8e1f921b5ea984b145';

const isVisible = document.querySelector('.isVisible');
const classes = isVisible.classList;

export function getImages(name) {
  classes.toggle('isVisible', false);
  const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(name)}&image_type=photo&orientation=horizontal&safesearch=true`;

  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      classes.toggle('isVisible', true);
      return response.json();
    })
    .then(result => {
      if (result && result.hits) {
       // Data from the backend
        showResult(result);
      } else {
        throw new Error('Invalid data format');
      }
    })
    .catch(error => console.log(error));
}