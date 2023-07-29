import { fetchCatByBreed } from './cap-api';
import { createCatMarkUp } from './markup-breed';
import { links } from './links-breed';
import Notiflix from 'notiflix';
import { showElement, hideElement } from '.';

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
          return fetch(`https://api.thecatapi.com/v1/images/${breedID}`).then(
            response => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            }
          );
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
        .catch(error => {
          hideElement(links.loaderText);
          Notiflix.Notify.failure(
            'Інформація не завантажилась. Спробуйте ще раз!'
          );
          console.log(error);
        });
    },
  },
};
