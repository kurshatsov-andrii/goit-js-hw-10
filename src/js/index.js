import { fetchBreeds } from './cap-api';
import { links } from './links-breed';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import { slimSelectOptions } from './select-breed';

fetchBreeds()
  .then(breedsList => {
    hideElement(links.loaderText);
    const breedsIDArray = breedsList.map(breed => ({
      text: breed.name,
      value: breed.id,
    }));

    const slimSelect = new SlimSelect(slimSelectOptions);

    slimSelect.setData(breedsIDArray);
  })
  .catch(() => {
    hideElement(links.loaderText);
    Notiflix.Notify.failure('Інформація не завантажилась. Спробуйте ще раз!');
  });

//Initialize the Notify Module with some options
Notiflix.Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '10px',
  opacity: 1,
  clickToClose: true,
});

//Показати елемент
function showElement(element) {
  element.classList.remove('is-hidden');
}

//Сховати елемент
function hideElement(element) {
  element.classList.add('is-hidden');
}

//Експорт функцій
export { showElement, hideElement };
