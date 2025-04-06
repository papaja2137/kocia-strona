// Główny skrypt strony

// Domyślne ustawienia filtrów
let currentFilters = {
    breed: 'all',
    color: 'all',
    size: 'all'
};

// Aktualnie wybrany kot
let selectedCat = null;

// Inicjalizacja strony
document.addEventListener('DOMContentLoaded', () => {
    // Inicjalizacja komponentów
    initHeader();
    initFooter();
    initCatFilter();
    renderCats();
});

// Renderuje karty kotów na podstawie danych i filtrów
function renderCats() {
    const catsContainer = document.getElementById('cats-container');
    catsContainer.innerHTML = '';

    // Filtrowanie kotów
    const filteredCats = filterCats(catsData);

    if (filteredCats.length === 0) {
        catsContainer.innerHTML = '<p class="no-results">Nie znaleziono kotów pasujących do wybranych filtrów.</p>';
        return;
    }

    // Tworzenie kart kotów
    filteredCats.forEach(cat => {
        const catCard = createCatCard(cat);
        catsContainer.appendChild(catCard);
    });
}

// Filtruje koty na podstawie wybranych filtrów
function filterCats(cats) {
    return cats.filter(cat => {
        // Filtrowanie po rasie
        if (currentFilters.breed !== 'all' && cat.name !== currentFilters.breed) {
            return false;
        }

        // Filtrowanie po kolorze
        if (currentFilters.color !== 'all' && !cat.colors.some(color => color.includes(currentFilters.color))) {
            return false;
        }

        // Filtrowanie po wielkości
        if (currentFilters.size !== 'all' && cat.size !== currentFilters.size) {
            return false;
        }

        return true;
    });
}

// Aktualizuje filtry i ponownie renderuje koty
function updateFilters(filters) {
    currentFilters = { ...currentFilters, ...filters };
    renderCats();
    
    // Ukryj szczegóły kota, jeśli są wyświetlane
    const catDetails = document.getElementById('cat-details');
    catDetails.classList.remove('active');
    
    // Pokaż kontenery kotów, jeśli były ukryte
    const catsContainer = document.getElementById('cats-container');
    catsContainer.style.display = 'grid';
}

// Wyświetla szczegóły wybranego kota
function showCatDetails(cat) {
    selectedCat = cat;
    
    const catsContainer = document.getElementById('cats-container');
    const catDetails = document.getElementById('cat-details');
    
    // Ukryj kontenery kotów
    catsContainer.style.display = 'none';
    
    // Placeholder SVG dla brakujących obrazów
    const placeholderSvg = 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23e0e0e0\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'Arial\' font-size=\'14\' fill=\'%23666\'%3EBrak zdjęcia%3C/text%3E%3C/svg%3E';
    
    // Przygotuj zawartość szczegółów
    catDetails.innerHTML = `
        <h2>${cat.name}</h2>
        <img src="${cat.image}" alt="${cat.name}" class="cat-image-large" onerror="this.src='${placeholderSvg}'">
        
        <div class="detail-section">
            <h3>Średni czas życia</h3>
            <p>${cat.lifespan}</p>
        </div>
        
        <div class="detail-section">
            <h3>Typowe kolory</h3>
            <ul>
                ${cat.colors.map(color => `<li>${color}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h3>Typowe choroby</h3>
            <ul>
                ${cat.diseases.map(disease => `<li>${disease}</li>`).join('')}
            </ul>
        </div>
        
        <div class="detail-section">
            <h3>Wielkość</h3>
            <p>${cat.size}</p>
        </div>
        
        <div class="detail-section">
            <h3>Dodatkowe informacje</h3>
            <p>${cat.additionalInfo}</p>
        </div>
        
        <button class="back-button" id="back-button">Wróć do listy</button>
    `;
    
    // Pokaż szczegóły
    catDetails.classList.add('active');
    
    // Dodaj obsługę przycisku powrotu
    document.getElementById('back-button').addEventListener('click', () => {
        catDetails.classList.remove('active');
        catsContainer.style.display = 'grid';
    });
}

// Pobierz unikalne wartości dla filtrów
function getUniqueFilterValues(property) {
    if (property === 'breed') {
        return catsData.map(cat => cat.name);
    } else if (property === 'color') {
        const allColors = catsData.flatMap(cat => cat.colors);
        return [...new Set(allColors)];
    } else if (property === 'size') {
        return [...new Set(catsData.map(cat => cat.size))];
    }
    return [];
} 