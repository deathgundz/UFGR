document.addEventListener('DOMContentLoaded', function () {
    // Retrieve character data from local storage
    const top16List = JSON.parse(localStorage.getItem('top16List')) || [];
    
    // Combine character data from different games into a single array
    const allCharacters = [...top16List];
    
    // Map character data to include image URLs and assign numbers
    const top16ListA = allCharacters.map((character, index) => {
        return { ...character, number: index + 1 };
    });

    // Extract image URLs for container A and container B
    const containerAPictures = [1, 2, 3, 4, 5, 6, 7, 8];
    const containerBPictures = [9, 10, 11, 12, 13, 14,15, 16];

    // Retrieve container elements
    const containerA = document.getElementById('containerA');
    const containerB = document.getElementById('containerB');

    let currentIndexA = 0;
    let currentIndexB = 0;
    let buttonClickCount = 0;

    // Clear top8List when the script starts
    localStorage.setItem('top8List', JSON.stringify([]));

    // Function to display the next image in container A and container B simultaneously
    function displayNextImages() {
        currentIndexA = (currentIndexA + 1) % containerAPictures.length;
        currentIndexB = (currentIndexB + 1) % containerBPictures.length;

        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const pictureIndexB = containerBPictures[currentIndexB] - 1;

        const characterA = top16ListA[pictureIndexA];
        const characterB = top16ListA[pictureIndexB];

        containerA.innerHTML = `<img src="${characterA.picture}" alt="Character A">`;
        containerB.innerHTML = `<img src="${characterB.picture}" alt="Character B">`;
    }

    // Event listener for both container buttons to change images simultaneously
    const containerAButton = document.getElementById('containerAButton');
    const containerBButton = document.getElementById('containerBButton');

    // Function to add the chosen picture to the top-8-list based on the button clicked
    function addChosenPicture(character) {
        const top8List = getTop8List();
        if (top8List.length === 8) {
            // Remove the oldest character from the list
            top8List.shift();
        }
        top8List.push(character);
        localStorage.setItem('top8List', JSON.stringify(top8List));
    }

    // Event listener for the buttons to add chosen pictures and change images simultaneously
    containerAButton.addEventListener('click', function() {
        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const chosenCharacter = top16ListA[pictureIndexA];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-8-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 8 page every 8 button clicks
        if (buttonClickCount === 8) {
            window.location.href = 'top8.html';
        }
    });

    containerBButton.addEventListener('click', function() {
        const pictureIndexB = containerBPictures[currentIndexB] - 1;
        const chosenCharacter = top16ListA[pictureIndexB];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-8-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 8 page every 8 button clicks
        if (buttonClickCount === 8) {
            window.location.href = 'top8.html';
        }
    });

    // Initial display of images
    displayNextImages();
});

// Function to retrieve the top 8 list from local storage
function getTop8List() {
    return JSON.parse(localStorage.getItem('top8List')) || [];
}
