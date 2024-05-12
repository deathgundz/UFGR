
document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/Tekken 8/Dragunov.png",
        "ultimate fighting games rating/Tekken 8/Kuma.png",
        "ultimate fighting games rating/Tekken 8/Nina Williams.png",
        "ultimate fighting games rating/Tekken 8/Yoshimitsu.png",
        "ultimate fighting games rating/Tekken 8/Victor Chevalier.png",
        "ultimate fighting games rating/Tekken 8/Marshall Law.png",
        "ultimate fighting games rating/Tekken 8/King.png",
        "ultimate fighting games rating/Tekken 8/Devil Jin.png",
        "ultimate fighting games rating/Tekken 8/Claudio.png",
        "ultimate fighting games rating/Tekken 8/Kazuya Mishima.png",
        "ultimate fighting games rating/Tekken 8/Ling Xiaoyu.png",
        "ultimate fighting games rating/Tekken 8/Steve.png",
        "ultimate fighting games rating/Tekken 8/Bryan Fury.png",
        "ultimate fighting games rating/Tekken 8/Jun Kazama.png",
        "ultimate fighting games rating/Tekken 8/Lili.png",
        "ultimate fighting games rating/Tekken 8/Shaheen.png",
        "ultimate fighting games rating/Tekken 8/Reina.png",
        "ultimate fighting games rating/Tekken 8/Leroy.png",
        "ultimate fighting games rating/Tekken 8/Jin Kazama.png",
        "ultimate fighting games rating/Tekken 8/Azucena.png",
        "ultimate fighting games rating/Tekken 8/Asuka.png",
        "ultimate fighting games rating/Tekken 8/Jack-8.png",
        "ultimate fighting games rating/Tekken 8/Leo.png",
        "ultimate fighting games rating/Tekken 8/Raven.png",
        "ultimate fighting games rating/Tekken 8/Alisa.png",
        "ultimate fighting games rating/Tekken 8/Hwoarang.png",
        "ultimate fighting games rating/Tekken 8/Lee.png",
        "ultimate fighting games rating/Tekken 8/Paul Phoenix.png",
        "ultimate fighting games rating/Tekken 8/FengWei.png",
        "ultimate fighting games rating/Tekken 8/Lars Alexandersson.png",
        "ultimate fighting games rating/Tekken 8/Panda.png",
        "ultimate fighting games rating/Tekken 8/Zafina.png"

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
            updateTopfour();
        }
    }
    
    function ratePicture(score) {
        ratings.push({ picture: pictures[currentIndex - 1], score: score });
        showNextPicture();
    }

    function updateTopfour() {
        const sortedRatings = ratings.sort((a, b) => b.score - a.score).slice(0, 4);

        // Store top four ratings in local storage to pass to the next page
        localStorage.setItem('topfourtekken8Ratings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'tekken8_result.html';
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
slider.addEventListener('input', function() {
    sliderValue.textContent = this.value;
    updateSliderBackground(this);
  });
  
  function updateSliderBackground(slider) {
    const value = slider.value / slider.max;
    slider.style.background = `linear-gradient(to right, red 0%, red ${value * 100}%, white ${value * 100}%, white 100%)`;
  }

  
