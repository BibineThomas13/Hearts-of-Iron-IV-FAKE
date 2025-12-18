const map = document.getElementById('map');
const provinceName = document.getElementById('province-name');
const provinceOwner = document.getElementById('province-owner');
const countryName = document.getElementById('country-name');
const manpower = document.getElementById('manpower');
const factories = document.getElementById('factories');

const provinces = [];
const numProvinces = 400; // 20x20 grid

// Create the map
for (let i = 0; i < numProvinces; i++) {
    const province = document.createElement('div');
    province.classList.add('province');
    province.dataset.id = i;
    provinces.push({
        id: i,
        owner: 'Neutral',
        element: province,
    });
    map.appendChild(province);

    province.addEventListener('click', () => {
        const clickedProvince = provinces[i];
        provinceName.textContent = `Province ${clickedProvince.id}`;
        provinceOwner.textContent = clickedProvince.owner;
    });
}

// Player's country
const playerCountry = {
    name: 'Player',
    manpower: 1000,
    factories: 5,
};

// Initialize the sidebar
countryName.textContent = playerCountry.name;
manpower.textContent = playerCountry.manpower;
factories.textContent = playerCountry.factories;

// Give the player a starting province
provinces[0].owner = playerCountry.name;
provinces[0].element.style.backgroundColor = '#00f'; // Blue for player