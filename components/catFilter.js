// Komponent filtrowania kotów

function initCatFilter() {
    const filterContainer = document.getElementById('filter-container');
    
    // Pobierz unikalne wartości dla filtrów
    const breeds = getUniqueFilterValues('breed');
    const colors = getUniqueFilterValues('color');
    const sizes = getUniqueFilterValues('size');
    
    // Tworzenie komponentu filtrów
    const filterElement = document.createElement('div');
    filterElement.className = 'filters';
    
    filterElement.innerHTML = `
        <h2>Filtruj koty</h2>
        <div class="filter-form">
            <div class="filter-group">
                <label for="breed-filter" class="filter-label">Rasa:</label>
                <select id="breed-filter" class="filter-select">
                    <option value="all">Wszystkie rasy</option>
                    ${breeds.map(breed => `<option value="${breed}">${breed}</option>`).join('')}
                </select>
            </div>
            
            <div class="filter-group">
                <label for="color-filter" class="filter-label">Kolor:</label>
                <select id="color-filter" class="filter-select">
                    <option value="all">Wszystkie kolory</option>
                    ${colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                </select>
            </div>
            
            <div class="filter-group">
                <label for="size-filter" class="filter-label">Wielkość:</label>
                <select id="size-filter" class="filter-select">
                    <option value="all">Wszystkie wielkości</option>
                    ${sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                </select>
            </div>
            
            <div class="filter-buttons">
                <button id="apply-filters" class="filter-button">Zastosuj filtry</button>
                <button id="reset-filters" class="filter-button">Resetuj</button>
            </div>
        </div>
    `;
    
    filterContainer.appendChild(filterElement);
    
    // Dodaj obsługę kliknięcia przycisku "Zastosuj filtry"
    document.getElementById('apply-filters').addEventListener('click', () => {
        const breedValue = document.getElementById('breed-filter').value;
        const colorValue = document.getElementById('color-filter').value;
        const sizeValue = document.getElementById('size-filter').value;
        
        updateFilters({
            breed: breedValue,
            color: colorValue,
            size: sizeValue
        });
    });
    
    // Dodaj obsługę kliknięcia przycisku "Resetuj"
    document.getElementById('reset-filters').addEventListener('click', () => {
        // Zresetuj wartości filtrów
        document.getElementById('breed-filter').value = 'all';
        document.getElementById('color-filter').value = 'all';
        document.getElementById('size-filter').value = 'all';
        
        // Aktualizuj filtry
        updateFilters({
            breed: 'all',
            color: 'all',
            size: 'all'
        });
    });
} 