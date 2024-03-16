document.addEventListener('DOMContentLoaded', function () {
    const topThreeList = document.getElementById('top-three-sf6-list');

    // Retrieve top three ratings from local storage
    const topThreeRatings = JSON.parse(localStorage.getItem('topThreesf6Ratings'));

    if (topThreeRatings) {
        // Display top three ratings on the page
        topThreeRatings.forEach((item, index) => {
            const listItem = document.createElement('li');
            const img = document.createElement('img');
            img.src = item.picture;
            img.alt = `Top Picture ${index + 1}`;
            listItem.appendChild(img);

            const scoreText = document.createElement('span');
            scoreText.textContent = `Score: ${item.score}`;
            listItem.appendChild(scoreText);

            topThreeList.appendChild(listItem);
        });
    } else {
        // If top three ratings not found in local storage, display a message
        topThreeList.textContent = 'Top three ratings not found.';
    }
});
