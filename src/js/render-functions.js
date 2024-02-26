import iziToast from 'izitoast';
import errorIcon from '../img/icon.svg';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const gallery = document.querySelector('.gallery');

export function showResult(result) {
  if (result.total === 0) {
    iziToast.error({
      iconUrl: errorIcon,
      iconColor: 'color: #fff',
      message:
        '<p>Sorry, there are no images matching</p> <p>your search query. Please try again!</p>',

      messageColor: '#fafafb',
      messageSize: '16px',
      position: 'topRight',
      theme: 'dark',
      backgroundColor: '#ef4040',
    });
  } else {
    const images = result.hits.slice(0, 9);
    gallery.innerHTML = '';
    gallery.insertAdjacentHTML(
      'beforeend',
      images
        .map(
          ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
          }) => {
            return `<div class="container">
                        <div class="card">
                            <a class="gallery-link" href="${largeImageURL}">
                                <img
                                class="image-card"
                                src="${webformatURL}"
                                alt="${tags}"
                                />
                            </a> 
                            <ul class="list">
                            <li class="list-item">
                                <p class="title">Likes</p>
                                <p class="value">${likes}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Views</p>
                                <p class="value">${views}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Comments</p>
                                <p class="value">${comments}</p>
                            </li>
                            <li class="list-item">
                                <p class="title">Downloads</p>
                                <p class="value">${downloads}</p>
                            </li>
                            </ul>
                        </div>
                    </div>`;
          }
        )
        .join('')
    );
  }
  const lightbox = new SimpleLightbox('.gallery-link', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
  });
  lightbox.refresh();

  lightbox.on('shown.simplelightbox', () => {
    const overlay = document.querySelector('.sl-wrapper');
    const counter = document.querySelector('.sl-counter');
    const buttonClose = document.querySelector('.sl-close');
    const arrowNavigation = document.querySelectorAll(
      '.sl-wrapper .sl-navigation button'
    );
    overlay.style.backgroundColor = 'rgba(46, 47, 66, 0.8)';
    counter.style.color = '#fff';
    counter.style.fontFamily = 'Montserrat';
    counter.style.top = '16px';
    buttonClose.style.color = '#fff';
    arrowNavigation.forEach(item => (item.style.color = '#fff'));
  });
}