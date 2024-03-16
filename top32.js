document.addEventListener('DOMContentLoaded', function () {
    const charactersContainer = document.getElementById('characters');
    const startButton = document.getElementById('startButton');
    const startTop16Button = document.getElementById('startTop16Button');

    // Retrieve top three ratings for each game from local storage
    const topThreeSF6Ratings = JSON.parse(localStorage.getItem('topThreesf6Ratings')) || [];
    const topThreeggstRatings = JSON.parse(localStorage.getItem('topThreeggstRatings')) || [];
    const topThreeDNFRatings = JSON.parse(localStorage.getItem('topThreednfRatings')) || [];
    const topThreeMK1Ratings = JSON.parse(localStorage.getItem('topThreemk1Ratings')) || [];
    const topThreeMBTLRatings = JSON.parse(localStorage.getItem('topThreembtlRatings')) || [];
    const topThreeGBFVRRatings = JSON.parse(localStorage.getItem('topThreegbfvrRatings')) || [];
    const topthreessdRatings = JSON.parse(localStorage.getItem('topthreessdRatings'));
    const topFourTekken8Ratings = JSON.parse(localStorage.getItem('topfourtekken8Ratings')) || [];
    const topFourTKOFXVRatings = JSON.parse(localStorage.getItem('topfourtkofxvRatings')) || [];
    const topThreeuni2scRatings = JSON.parse(localStorage.getItem('topThreeuni2scRatings'));
    

    // Combine all the ratings into one array
    const allRatings = [
        ...topThreeSF6Ratings,
        ...topThreeggstRatings,
        ...topThreeDNFRatings,
        ...topThreeMK1Ratings,
        ...topThreeMBTLRatings,
        ...topThreeGBFVRRatings,
        ...topthreessdRatings,
        ...topFourTekken8Ratings,
        ...topFourTKOFXVRatings,
        ...topThreeuni2scRatings,
        
    ];

    // Function to display characters
    function displayCharacters() {
        allRatings.forEach(character => {
            const img = document.createElement('img');
            img.src = character.picture;
            img.alt = 'C';
            charactersContainer.appendChild(img);
        });
    }

    // Event listener for start button
    startButton.addEventListener('click', function () {
        displayCharacters();
        startButton.style.display = 'none';
        startTop16Button.style.display = 'block';
    });

    // Event listener for start top 16 button
    startTop16Button.addEventListener('click', function () {
        // Implement the functionality to start the top 16 matches
    });
});
