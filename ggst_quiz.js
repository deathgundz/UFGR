
document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Anji.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Asuka.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Axl.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Baiken.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Bedman.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Bridget.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Chaos.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Chipp.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Elphelt.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Faust.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Nagoriyuki.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Millia.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/May.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Ky.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Leo.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Johnny.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Jack-o.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/I-No.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Goldlewis.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Giovanna.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Zato.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Testament.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Sol.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Sin.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Ramlethal.png",
        "ultimate fighting games rating/Guilty Gear -STRIVE-/Potemkin.png"

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
        localStorage.setItem('topThreeggstRatings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'ggst_result.html';
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

  