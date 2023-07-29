import { fetchCatByBreed } from './cap-api';
import { createCatMarkUp } from './markup-breed';
import { links } from './links-breed';
import Notiflix from 'notiflix';
import axios from 'axios';
import { showElement, hideElement } from '.';
import { BASE_URL } from './cap-api';

let selectBreedID = '';

export const slimSelectOptions = {
  select: links.breedSelect,

  events: {
    afterChange: newBreed => {
      selectBreedID = newBreed[0].value;
    },
    afterOpen: () => {
      links.catInfo.innerHTML = '';
    },

    afterClose: () => {
      fetchCatByBreed(selectBreedID)
        .then(data => {
          const breedID = data[0].id;
          return axios.get(`${BASE_URL}images/${breedID}`).then(response => {
            return response.data;
          });
        })
        .then(({ url, breeds }) => {
          const [{ name, description, temperament }] = breeds;

          const catMarkUp = createCatMarkUp(
            url,
            name,
            description,
            temperament
          );

          links.catInfo.innerHTML = catMarkUp;

          hideElement(links.loaderText);
          showElement(links.catInfo);
        })
        .catch(() => {
          hideElement(links.loaderText);
          Notiflix.Notify.failure(
            'Інформація не завантажилась. Спробуйте ще раз!'
          );
        });
    },
  },
};
