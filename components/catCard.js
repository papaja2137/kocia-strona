// Komponent karty kota

function createCatCard(cat) {
    const cardElement = document.createElement('div');
    cardElement.className = 'cat-card';
    cardElement.dataset.id = cat.id;
    
    // Tworzenie zawartości karty
    cardElement.innerHTML = `
        <div class="cat-image-container">
            <img src="${cat.image}" alt="${cat.name}" class="cat-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100%25\' height=\'100%25\' viewBox=\'0 0 100 100\'%3E%3Crect width=\'100\' height=\'100\' fill=\'%23e0e0e0\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\' font-family=\'Arial\' font-size=\'14\' fill=\'%23666\'%3EBrak zdjęcia%3C/text%3E%3C/svg%3E';">
        </div>
        <div class="cat-info">
            <h3 class="cat-name">${cat.name}</h3>
            <p class="cat-size">Wielkość: ${cat.size}</p>
        </div>
    `;
    
    // Dodaj obsługę kliknięcia na kartę
    cardElement.addEventListener('click', () => {
        showCatDetails(cat);
    });
    
    return cardElement;
} 