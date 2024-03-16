
document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/DNF Duel/Battle mage.png",
        "ultimate fighting games rating/DNF Duel/Berserker.png",
        "ultimate fighting games rating/DNF Duel/Brawler.png",
        "ultimate fighting games rating/DNF Duel/Crusader.png",
        "ultimate fighting games rating/DNF Duel/Dragon Knight.png",
        "ultimate fighting games rating/DNF Duel/Enchantress.png",
        "ultimate fighting games rating/DNF Duel/Ghostblade.png",
        "ultimate fighting games rating/DNF Duel/Grappler.png",
        "ultimate fighting games rating/DNF Duel/Hitman.png",
        "ultimate fighting games rating/DNF Duel/Inquisitor.png",
        "ultimate fighting games rating/DNF Duel/Kunoichi.png",
        "ultimate fighting games rating/DNF Duel/Launcher.png",
        "ultimate fighting games rating/DNF Duel/Lost Warrior.png",
        "ultimate fighting games rating/DNF Duel/Ranger.png",
        "ultimate fighting games rating/DNF Duel/Spectre.png",
        "ultimate fighting games rating/DNF Duel/Striker.png",
        "ultimate fighting games rating/DNF Duel/Swift Master.png",
        "ultimate fighting games rating/DNF Duel/Troubleshooter.png",
        "ultimate fighting games rating/DNF Duel/Vanguard.png"
        
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
        localStorage.setItem('topThreednfRatings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'dnf_result.html';
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

  