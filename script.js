let field = document.querySelector('#field');
let message = document.querySelector('#message');
let citiesDiv = document.querySelector('#cities');

let cities = [];

let currentPlayer = 1;

field.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        let cityName = field.value.toUpperCase();
        let lastLetter = cities.length === 0 ? '' : cities[cities.length - 1].charAt(cities[cities.length - 1].length - 1);

        if (cities.includes(cityName)) {
            message.textContent = 'Такой город уже был.';
        } else {
            if (cities.length === 0 || cityName.charAt(0) === lastLetter) {
                cities.push(cityName);
                currentPlayer = 3 - currentPlayer;
                lastLetter = cityName.charAt(cityName.length - 1);

                message.textContent = `Ход ${currentPlayer}-го игрока. Назовите город на букву ${lastLetter}`;
                
                citiesDiv.textContent = cities.join(' ');
            } else {
                message.textContent = `Ваш город не начинается с ${lastLetter}. Попробуйте другой.`;
            }
        }

        field.value = '';
    }
});
