import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { fetchPhotosByQuery } from "./js/pixabay-api";
import { renderImages } from "./js/render-functions";

const form = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-images');
const loader = document.querySelector('.loader');

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const value = searchInput.value.trim();
    if (value === '') {
      alert('Please enter a search term!');
      return;
    }

    loader.style.display = 'block';

    fetchPhotosByQuery(value)
      .then(data => {
        if (data.hits.length === 0) {
          iziToast.error({
            title: 'Error!',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        }
        renderImages(data.hits);
      })

      .catch(error => {
        console.error('Error fetching images:', error);
        throw error;
      }).finally(() => {
      loader.style.display = 'none';
    });
    searchInput.value = '';
  });
});