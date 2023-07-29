import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_zyvV1fkbw04CoPI7U6pWwexV2BTvXDNYSo4mt70WRsUYxZ8inpqS3puiGyVlDPEk';

const BASE_URL = 'https://api.thecatapi.com/v1/';

//Функція fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід
//- результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
function fetchBreeds() {
  return axios.get(`${BASE_URL}breeds`).then(response => response.data);
}

//Функція fetchCatByBreed(breedId), яка очікує ідентифікатор породи,
//робить HTTP - запит і повертає проміс із даними про кота - результатом запиту.
//Винеси її у файл cat - api.js і зроби іменований експорт.
function fetchCatByBreed(selectBreedID) {
  return axios
    .get(`${BASE_URL}images/search?breed_ids=${selectBreedID}`)
    .then(response => {
      return response.data;
    });
}

//експорт функцій та змінної
export { fetchBreeds, fetchCatByBreed };
export { BASE_URL };
