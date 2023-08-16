const outputElement = document.getElementById('output');

(async function() {
  try {
    const response = await fetch('./cars.json');
    const data = await response.json();

    outputElement.innerHTML = '';

    data.forEach(brand => {
      const brandCard = document.createElement('div');
      brandCard.classList.add('brand-card');
      brandCard.innerHTML = `
        <h2>${brand.brand}</h2>
        <ol>
          ${brand.models.map(model => `<li>${model}</li>`).join('')}
        </ol>`;
      outputElement.appendChild(brandCard);
    });
  } catch (error) {
    console.log('Error loading car data:', error);
  }
})();
