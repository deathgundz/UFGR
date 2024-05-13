document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/Mortal Kombat 1/ASHRAH.png",
        "ultimate fighting games rating/Mortal Kombat 1/BARAKA.png",
        "ultimate fighting games rating/Mortal Kombat 1/ermac.png",
        "ultimate fighting games rating/Mortal Kombat 1/GÉNÉRAL SHAO.png",
        "ultimate fighting games rating/Mortal Kombat 1/GERAS.png",
        "ultimate fighting games rating/Mortal Kombat 1/HAVIK.png",
        "ultimate fighting games rating/Mortal Kombat 1/JOHNNY CAGE.png",
        "ultimate fighting games rating/Mortal Kombat 1/KENSHI TAKAHASHI.png",
        "ultimate fighting games rating/Mortal Kombat 1/KITANA.png",
        "ultimate fighting games rating/Mortal Kombat 1/KUNG LAO.png",
        "ultimate fighting games rating/Mortal Kombat 1/LI MEI.png",
        "ultimate fighting games rating/Mortal Kombat 1/LIU KANG.png",
        "ultimate fighting games rating/Mortal Kombat 1/MILEENA.png",
        "ultimate fighting games rating/Mortal Kombat 1/NDEL.png",
        "ultimate fighting games rating/Mortal Kombat 1/NITARA.png",
        "ultimate fighting games rating/Mortal Kombat 1/QUAN CHI.png",
        "ultimate fighting games rating/Mortal Kombat 1/RAIDEN.png",
        "ultimate fighting games rating/Mortal Kombat 1/RAIN.png",
        "ultimate fighting games rating/Mortal Kombat 1/REIKO.png",
        "ultimate fighting games rating/Mortal Kombat 1/REPTILE.png",
        "ultimate fighting games rating/Mortal Kombat 1/SCORPION.png",
        "ultimate fighting games rating/Mortal Kombat 1/SHANG TSUNG.png",
        "ultimate fighting games rating/Mortal Kombat 1/SMOKE.png",
        "ultimate fighting games rating/Mortal Kombat 1/SUB-ZERO.png",
        "ultimate fighting games rating/Mortal Kombat 1/TANYA.png"
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
        localStorage.setItem('topThreemk1Ratings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'mk1_result.html';
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
