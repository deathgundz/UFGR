document.addEventListener('DOMContentLoaded', function () {
    const topThreeList = document.getElementById('top-three-uni2sc-list');

    // Retrieve top three ratings from local storage
    const topThreeuni2scRatings = JSON.parse(localStorage.getItem('topThreeuni2scRatings'));

    if (topThreeuni2scRatings) {
        // Display top three ratings on the page
        topThreeuni2scRatings.forEach((item, index) => {
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
