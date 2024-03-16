document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');

    // Retrieve top 8 characters from local storage
    const top8List = JSON.parse(localStorage.getItem('top8List')) || [];

    // Display top 8 matches
    top8List.forEach((character, index) => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');

        const characterImage = document.createElement('img');
        characterImage.src = character.picture;
        characterImage.alt = character.name;

        const characterName = document.createElement('p');
        characterName.textContent = character.name;

        matchCard.appendChild(characterImage);
        matchCard.appendChild(characterName);

        main.appendChild(matchCard);
    });

    // Button event listener
    const startButton = document.getElementById('startButton');
    startButton.addEventListener('click', function () {
        // Add functionality to start the top 8 matches
        console.log("Starting the Top 8 Matches...");
    });
});
