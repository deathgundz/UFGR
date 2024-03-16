document.addEventListener('DOMContentLoaded', function () {
    const topthreeList = document.getElementById('top-three-ssd-list');

    // Retrieve top four ratings from local storage
    const topthreessdRatings = JSON.parse(localStorage.getItem('topthreessdRatings'));

    if (topthreessdRatings) {
        // Display top three ratings on the page
        topthreessdRatings.forEach((item, index) => {
            const listItem = document.createElement('li');
            const img = document.createElement('img');
            img.src = item.picture;
            img.alt = `Top Picture ${index + 1}`;
            listItem.appendChild(img);

            const scoreText = document.createElement('span');
            scoreText.textContent = `Score: ${item.score}`;
            listItem.appendChild(scoreText);

            topthreeList.appendChild(listItem);
        });
    } else {
        // If top four ratings not found in local storage, display a message
        topthreeList.textContent = 'Top four ratings not determen yet.';
    }
});
