export function createCatMarkUp(url, name, description, temperament) {
  return `<img src="${url}" alt="${name}" class="cat-img" />
    <div class="description-cat">
      <h2>${name}</h2>
      <p>${description}</p>
      <p><span class="temperament-cat">Temperament:</span> ${temperament}</p>
    </div>`;
}
