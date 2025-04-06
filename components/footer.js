// Komponent stopki

function initFooter() {
    const footerContainer = document.getElementById('footer-container');
    
    // Tworzenie stopki
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} Kocia Strona. Wszelkie prawa zastrzeżone.</p>
        <p>
            <a href="#">Polityka prywatności</a> | 
            <a href="#">Regulamin</a> | 
            <a href="#">Kontakt</a>
        </p>
    `;
    
    footerContainer.appendChild(footer);
} 