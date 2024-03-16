document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/belial.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/grimnir.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/narmaya.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/beelzebub.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/gran.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/metera.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/avatarbelial.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/ferry.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/lucilius.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/anre.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/eustace.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/lowain.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/anila.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/djeeta.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/lancelot.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/2b.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/charlotta.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/ladiva.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/percival.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/seox.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/siegfried.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/soriz.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/vaseraga.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/vira.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/zeta.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/zooey.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/yuel.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/nier.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/katalina.png",
        "ultimate fighting games rating/Granblue Fantasy Versus Rising/cagliostro.png"

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
        localStorage.setItem('topThreegbfvrRatings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'gbfvr_result.html';
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
