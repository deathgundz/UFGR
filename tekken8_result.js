document.addEventListener('DOMContentLoaded', function () {
    const topfourList = document.getElementById('top-four-tekken8-list');

    // Retrieve top four ratings from local storage
    const topfourRatings = JSON.parse(localStorage.getItem('topfourtekken8Ratings'));

    if (topfourRatings) {
        // Display top four ratings on the page
        topfourRatings.forEach((item, index) => {
            const listItem = document.createElement('li');
            const img = document.createElement('img');
            img.src = item.picture;
            img.alt = `Top Picture ${index + 1}`;
            listItem.appendChild(img);

            const scoreText = document.createElement('span');
            scoreText.textContent = `Score: ${item.score}`;
            listItem.appendChild(scoreText);

            topfourList.appendChild(listItem);
        });
    } else {
        // If top four ratings not found in local storage, display a message
        topfourList.textContent = 'Top four ratings not found.';
    }
});
