// Komponent nagłówka

function initHeader() {
    const headerContainer = document.getElementById('header-container');
    
    // Tworzenie nagłówka
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Kocia Strona</h1>
        <nav>
            <ul>
                <li><a href="#" id="nav-home">Strona główna</a></li>
                <li><a href="#" id="nav-about">O kotach</a></li>
                <li><a href="#" id="nav-contact">Kontakt</a></li>
            </ul>
        </nav>
    `;
    
    headerContainer.appendChild(header);
    
    // Dodaj obsługę kliknięć w menu
    document.getElementById('nav-home').addEventListener('click', (e) => {
        e.preventDefault();
        // Pokazuje wszystkie koty (resetuje filtry)
        updateFilters({
            breed: 'all',
            color: 'all',
            size: 'all'
        });
        
        // Ukrycie szczegółów kota, jeśli są wyświetlane
        const catDetails = document.getElementById('cat-details');
        catDetails.classList.remove('active');
        
        // Pokazanie kontenerów kotów
        const catsContainer = document.getElementById('cats-container');
        catsContainer.style.display = 'grid';
    });
    
    document.getElementById('nav-about').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Ta sekcja jest w trakcie budowy.');
    });
    
    document.getElementById('nav-contact').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Ta sekcja jest w trakcie budowy.');
    });
} 