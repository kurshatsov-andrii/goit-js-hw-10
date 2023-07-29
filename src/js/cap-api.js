const BASE_URL = 'https://api.thecatapi.com/v1/';
const API_KEY =
  'live_zyvV1fkbw04CoPI7U6pWwexV2BTvXDNYSo4mt70WRsUYxZ8inpqS3puiGyVlDPEk';

//Функція fetchBreeds(), яка виконує HTTP-запит і повертає проміс із масивом порід
//- результатом запиту. Винеси її у файл cat-api.js та зроби іменований експорт.
function fetchBreeds() {
  return fetch(`${BASE_URL}breeds?x-api-key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

//URL-запит для отримання повної інформації про собаку за ідентифікатором породи
//Напиши функцію fetchCatByBreed(breedId), яка очікує ідентифікатор породи,
//робить HTTP - запит і повертає проміс із даними про кота - результатом запиту.
//Винеси її у файл cat - api.js і зроби іменований експорт.
function fetchCatByBreed(selectBreedID) {
  return fetch(
    `${BASE_URL}images/search?breed_ids=${selectBreedID}&x-api-key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
