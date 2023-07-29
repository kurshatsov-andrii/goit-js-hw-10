import { fetchBreeds } from './cap-api';
import { links } from './links-breed';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
import Notiflix from 'notiflix';
import { slimSelectOptions } from './select-breed';

//Напиши функцію fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід
//- результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
fetchBreeds()
  .then(breedsList => {
    hideElement(links.loaderText);
    const breedsIdArray = breedsList.map(breed => ({
      text: breed.name,
      value: breed.id,
    }));

    const slimSelect = new SlimSelect(slimSelectOptions);

    slimSelect.setData(breedsIdArray);
  })
  .catch(error => {
    console.log(error);
    hideElement(links.loaderText);
    Notiflix.Notify.failure('Інформація не завантажилась. Спробуйте ще раз!');
  });

Notiflix.Notify.init({
  width: '280px',
  position: 'left-top',
  distance: '10px',
  opacity: 1,
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
