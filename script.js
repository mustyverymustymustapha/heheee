document.addEventListener('DOMContentLoaded', () => {
    const generateButton = document.getElementById('generate-cat');
    const catContainer = document.getElementById('cat-container');
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');
    generateButton.addEventListener('click', generateCat);
    menuButton.addEventListener('click', toggleMenu);
    function generateCat() {
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                const catImage = document.createElement('img');
                catImage.src = data[0].url;
                catImage.alt = 'Random cat picture';
                catContainer.innerHTML = '';
                catContainer.appendChild(catImage);
            })
            .catch(error => console.error('Error fetching cat picture:', error));
    }

    function toggleMenu() {
        menu.classList.toggle('active');
    }
});