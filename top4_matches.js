document.addEventListener('DOMContentLoaded', function () {
    // Retrieve character data from local storage
    const top4List = JSON.parse(localStorage.getItem('top4List')) || [];
    
    // Combine character data from different games into a single array
    const allCharacters = [...top4List];
    
    // Map character data to include image URLs and assign numbers
    const top4ListA = allCharacters.map((character, index) => {
        return { ...character, number: index + 1 };
    });

    // Extract image URLs for container A and container B
    const containerAPictures = [1, 2];
    const containerBPictures = [3, 4];

    // Retrieve container elements
    const containerA = document.getElementById('containerA');
    const containerB = document.getElementById('containerB');

    let currentIndexA = 0;
    let currentIndexB = 0;
    let buttonClickCount = 0;
    // Clear top8List when the script starts
    localStorage.setItem('top2List', JSON.stringify([]));

    // Function to display the next image in container A and container B simultaneously
    function displayNextImages() {
        currentIndexA = (currentIndexA + 1) % containerAPictures.length;
        currentIndexB = (currentIndexB + 1) % containerBPictures.length;

        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const pictureIndexB = containerBPictures[currentIndexB] - 1;

        const characterA = top4ListA[pictureIndexA];
        const characterB = top4ListA[pictureIndexB];

        containerA.innerHTML = `<img src="${characterA.picture}" alt="Character A">`;
        containerB.innerHTML = `<img src="${characterB.picture}" alt="Character B">`;
    }

    // Event listener for both container buttons to change images simultaneously
    const containerAButton = document.getElementById('containerAButton');
    const containerBButton = document.getElementById('containerBButton');

    // Function to add the chosen picture to the top-4-list based on the button clicked
    function addChosenPicture(character) {
        const top2List = getTop2List();
        if (top2List.length === 2) {
            // Remove the oldest character from the list
            top2List.shift();
        }
        top2List.push(character);
        localStorage.setItem('top2List', JSON.stringify(top2List));
    }

    // Event listener for the buttons to add chosen pictures and change images simultaneously
    containerAButton.addEventListener('click', function() {
        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const chosenCharacter = top4ListA[pictureIndexA];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-4-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 2 page every 2 button clicks
        if (buttonClickCount === 2) {
            window.location.href = 'top2.html';
        }
    });

    containerBButton.addEventListener('click', function() {
        const pictureIndexB = containerBPictures[currentIndexB] - 1;
        const chosenCharacter = top4ListA[pictureIndexB];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-4-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 2 page every 2 button clicks
        if (buttonClickCount === 2) {
            window.location.href = 'top2.html';
        }
    });

    // Initial display of images
    displayNextImages();
});

// Function to retrieve the top 4 list from local storage
function getTop2List() {
    return JSON.parse(localStorage.getItem('top2List')) || [];
}
