document.addEventListener('DOMContentLoaded', function () {
    // Retrieve character data from local storage
    const topThreeSF6Ratings = JSON.parse(localStorage.getItem('topThreesf6Ratings')) || [];
    const topThreeggstRatings = JSON.parse(localStorage.getItem('topThreeggstRatings')) || [];
    const topThreeDNFRatings = JSON.parse(localStorage.getItem('topThreednfRatings')) || [];
    const topThreeMK1Ratings = JSON.parse(localStorage.getItem('topThreemk1Ratings')) || [];
    const topThreeMBTLRatings = JSON.parse(localStorage.getItem('topThreembtlRatings')) || [];
    const topThreeGBFVRRatings = JSON.parse(localStorage.getItem('topThreegbfvrRatings')) || [];
    const topthreessdRatings = JSON.parse(localStorage.getItem('topthreessdRatings')) || [];
    const topFourTekken8Ratings = JSON.parse(localStorage.getItem('topfourtekken8Ratings')) || [];
    const topFourTKOFXVRatings = JSON.parse(localStorage.getItem('topfourtkofxvRatings')) || [];
    const topThreeuni2scRatings = JSON.parse(localStorage.getItem('topThreeuni2scRatings')) || [];
    
    
    // Combine character data from different games into a single array
    const allCharacters = [
        ...topThreeSF6Ratings,
        ...topThreeggstRatings,
        ...topThreeDNFRatings,
        ...topThreeMK1Ratings,
        ...topThreeMBTLRatings,
        ...topThreeGBFVRRatings,
        ...topThreeuni2scRatings,
        ...topthreessdRatings,
        ...topFourTekken8Ratings,
        ...topFourTKOFXVRatings
    ];

    // Map character data to include image URLs and assign numbers
    const top32List = allCharacters.map((character, index) => {
        return { ...character, number: index + 1 };
    });

    // Extract image URLs for container A and container B
    const containerAPictures = [1, 2, 3, 7, 8, 9, 13, 14, 15, 19, 20, 21, 25, 26, 27, 28];
    const containerBPictures = [4, 5, 6, 10, 11, 12, 16, 17, 18, 22, 23, 24, 29, 30, 31, 32];

    // Retrieve container elements
    const containerA = document.getElementById('containerA');
    const containerB = document.getElementById('containerB');

    let currentIndexA = 0;
    let currentIndexB = 0;
    let buttonClickCount = 0;
     // Clear top16List when the script starts
     localStorage.setItem('top16List', JSON.stringify([]));

    // Function to display the next image in container A and container B simultaneously
    function displayNextImages() {
        currentIndexA = (currentIndexA + 1) % containerAPictures.length;
        currentIndexB = (currentIndexB + 1) % containerBPictures.length;

        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const pictureIndexB = containerBPictures[currentIndexB] - 1;

        const characterA = top32List[pictureIndexA];
        const characterB = top32List[pictureIndexB];

        containerA.innerHTML = `<img src="${characterA.picture}" alt="Character A">`;
        containerB.innerHTML = `<img src="${characterB.picture}" alt="Character B">`;
    }

    // Event listener for both container buttons to change images simultaneously
    const containerAButton = document.getElementById('containerAButton');
    const containerBButton = document.getElementById('containerBButton');

    // Function to add the chosen picture to the top-16-list based on the button clicked
    function addChosenPicture(character) {
        const top16List = getTop16List();
        if (top16List.length === 16) {
            // Remove the oldest character from the list
            top16List.shift();
        }
        top16List.push(character);
        localStorage.setItem('top16List', JSON.stringify(top16List));
    }

    // Event listener for the buttons to add chosen pictures and change images simultaneously
    containerAButton.addEventListener('click', function() {
        const pictureIndexA = containerAPictures[currentIndexA] - 1;
        const chosenCharacter = top32List[pictureIndexA];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-16-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 16 page every 16 button clicks
        if (buttonClickCount === 16) {
            window.location.href = 'top16.html';
        }
    });

    containerBButton.addEventListener('click', function() {
        const pictureIndexB = containerBPictures[currentIndexB] - 1;
        const chosenCharacter = top32List[pictureIndexB];
        addChosenPicture(chosenCharacter); // Add the chosen picture to the top-16-list
        displayNextImages();
        // Count button clicks
        buttonClickCount++;
        
        // Redirect to top 16 page every 16 button clicks
        if (buttonClickCount === 16) {
            window.location.href = 'top16.html';
        }
    });

    // Initial display of images
    displayNextImages();
});

// Function to retrieve the top 16 list from local storage
function getTop16List() {
    return JSON.parse(localStorage.getItem('top16List')) || [];
}
