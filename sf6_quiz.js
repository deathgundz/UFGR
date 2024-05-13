document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/Street Fighter 6/aki.png",
        "ultimate fighting games rating/Street Fighter 6/blanka.png",
        "ultimate fighting games rating/Street Fighter 6/cammy.png",
        "ultimate fighting games rating/Street Fighter 6/chunli.png",
        "ultimate fighting games rating/Street Fighter 6/deejay.png",
        "ultimate fighting games rating/Street Fighter 6/dhalsim.png",
        "ultimate fighting games rating/Street Fighter 6/ed.png",
        "ultimate fighting games rating/Street Fighter 6/ehonda.png",
        "ultimate fighting games rating/Street Fighter 6/guile.png",
        "ultimate fighting games rating/Street Fighter 6/jamie.png",
        "ultimate fighting games rating/Street Fighter 6/jp.png",
        "ultimate fighting games rating/Street Fighter 6/juri.png",
        "ultimate fighting games rating/Street Fighter 6/ken.png",
        "ultimate fighting games rating/Street Fighter 6/kimberly.png",
        "ultimate fighting games rating/Street Fighter 6/lily.png",
        "ultimate fighting games rating/Street Fighter 6/luke.png",
        "ultimate fighting games rating/Street Fighter 6/manon.png",
        "ultimate fighting games rating/Street Fighter 6/marisa.png",
        "ultimate fighting games rating/Street Fighter 6/rashid.png",
        "ultimate fighting games rating/Street Fighter 6/ryu.png",
        "ultimate fighting games rating/Street Fighter 6/zangief.png",
        "ultimate fighting games rating/Street Fighter 6/akuma.png"
    ];

    let currentIndex = 0;
    let ratings = [];
    let timer;

    const pictureElement = document.getElementById('picture');
    const ratingSlider = document.getElementById('rating-slider');
    const sliderValue = document.getElementById('slider-value');
    const timerBar = document.querySelector('.timer-bar');
    const rateButton = document.getElementById('rate-button');
    const resultContainer = document.getElementById('result');

    function showNextPicture() {
        if (currentIndex < pictures.length) {
            pictureElement.onload = function() {
                // Once the picture is loaded, start the timer
                restartTimer();
            };
            pictureElement.src = pictures[currentIndex];
            ratingSlider.value = 5;
            sliderValue.textContent = '5';
            currentIndex++;
        } else {
            updateTopThree();
        }
    }

    function ratePicture(score) {
        ratings.push({ picture: pictures[currentIndex - 1], score: score });
        showNextPicture();
    }

    function updateTopThree() {
        const sortedRatings = ratings.sort((a, b) => b.score - a.score).slice(0, 3);

        // Store top three ratings in local storage to pass to the next page
        localStorage.setItem('topThreesf6Ratings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'sf6_result.html';
    }

    function restartTimer() {
        timerBar.style.animation = 'none';
        void timerBar.offsetWidth; // Trigger reflow
        timerBar.style.animation = 'timerAnimation 10s linear infinite';
        clearTimeout(timer); // Clear previous timer
        timer = setTimeout(function () {
            ratePicture(5); // Auto-rate the picture as 5 after 10 seconds
        }, 10000);
    }

    function stopTimer() {
        timerBar.style.animation = 'none';
        clearTimeout(timer); // Clear the timer when the picture is rated manually
    }

    rateButton.addEventListener('click', function () {
        stopTimer(); // Stop the timer when user manually rates the picture
        ratePicture(parseInt(ratingSlider.value));
    });

    ratingSlider.addEventListener('input', function () {
        sliderValue.textContent = ratingSlider.value;
    });

    showNextPicture(); // Start displaying pictures
});
const audio = document.querySelector('audio');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play ';
    }
});
