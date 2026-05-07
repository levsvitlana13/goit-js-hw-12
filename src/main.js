import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let page = 1;
let currentQuery = '';
let totalHits = 0;

const PER_PAGE = 15;

form.addEventListener('submit', async event => {
  event.preventDefault();

  const input = form.querySelector('input');
  currentQuery = input.value.trim();

  if (!currentQuery) return;

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    totalHits = data.totalHits;

    if (!data.hits.length) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / PER_PAGE);

    if (page >= totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }

  form.reset();
});

loadMoreBtn.addEventListener('click', async () => {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);

    const totalPages = Math.ceil(totalHits / PER_PAGE);

    if (page >= totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }

    const galleryItem = document.querySelector('.gallery-item');
    if (galleryItem) {
      const { height: cardHeight } = galleryItem.getBoundingClientRect();
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong!',
    });
  } finally {
    hideLoader();
  }
});