export function createCatMarkUp(url, name, description, temperament) {
  return `<div class="img-wrapper"><img src="${url}" alt="${name}" class="cat-img" /></div>
    <div class="description-cat">
      <h2>${name}</h2>
      <p>${description}</p>
      <h3>Temperament</h3>
      <p>${temperament}</p>      
    </div>`;
}
