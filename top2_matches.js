document.addEventListener('DOMContentLoaded', function () {
    // Retrieve character data from local storage
    const top2List = JSON.parse(localStorage.getItem('top2List')) || [];
    
    // Combine character data from different games into a single array
    const allCharacters = [...top2List];
    
    // Map character data to include image URLs and assign numbers
    const top2ListA = allCharacters.map((character, index) => {
        return { ...character, number: index + 1 };
    });

    // Extract image URLs for container A and container B
    const containerAPictures = [1];
    const containerBPictures = [2];

    // Retrieve container elements
    const containerA = document.getElementById('containerA');
    const containerB = document.getElementById('containerB');

    let currentIndexA = 0;
    let currentIndexB = 0;
    let buttonClickCount = 0;
    // Clear top8List when the script starts
    localStorage.setItem('top1List', JSON.stringify([]));

    // Function to display the next image in container A and container B simultaneously
    function displayNextImages() {
        currentIndexA = (currentIndexA + 1) % containerAPictures.length;
        currentIndexB = (currentIndexB + 1) % containerBPictures.length;

        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const pictureIndexB = containerBPictures[currentIndexB] - 1;

        const characterA = top2ListA[pictureIndexA];
        const characterB = top2ListA[pictureIndexB];

        containerA.innerHTML = `<img src="${characterA.picture}" alt="Character A">`;
        containerB.innerHTML = `<img src="${characterB.picture}" alt="Character B">`;
    }

    // Event listener for both container buttons to change images simultaneously
    const containerAButton = document.getElementById('containerAButton');
    const containerBButton = document.getElementById('containerBButton');

    // Function to add the chosen picture to the top-4-list based on the button clicked
    function addChosenPicture(character) {
        const top1List = getTop1List();
        if (top1List.length === 1) {
            // Remove the oldest character from the list
            top1List.shift();
        }
        top1List.push(character);
        localStorage.setItem('top1List', JSON.stringify(top1List));
    }

    // Event listener for the buttons to add chosen pictures and change images simultaneously
    containerAButton.addEventListener('click', function() {
        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const chosenCharacter = top2ListA[pictureIndexA];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-4-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 2 page every 2 button clicks
        if (buttonClickCount === 1) {
            window.location.href = 'top1.html';
        }
    });

    containerBButton.addEventListener('click', function() {
        const pictureIndexB = containerBPictures[currentIndexB] - 1;
        const chosenCharacter = top2ListA[pictureIndexB];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-4-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 2 page every 2 button clicks
        if (buttonClickCount === 1) {
            window.location.href = 'top1.html';
        }
    });

    // Initial display of images
    displayNextImages();
});

// Function to retrieve the top 4 list from local storage
function getTop1List() {
    return JSON.parse(localStorage.getItem('top1List')) || [];
}
