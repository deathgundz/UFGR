
document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/Samurai Shodown/Amakusa.png",
        "ultimate fighting games rating/Samurai Shodown/Basara Kubikiri.png",
        "ultimate fighting games rating/Samurai Shodown/Cham Cham.png",
        "ultimate fighting games rating/Samurai Shodown/Charlotte Christine de Colde.png",
        "ultimate fighting games rating/Samurai Shodown/Darli Dagger.png",
        "ultimate fighting games rating/Samurai Shodown/Earthquake.png",
        "ultimate fighting games rating/Samurai Shodown/Galford.png",
        "ultimate fighting games rating/Samurai Shodown/Gongsun Li.png",
        "ultimate fighting games rating/Samurai Shodown/Hanzo Hattori.png",
        "ultimate fighting games rating/Samurai Shodown/Haohmaru.png",
        "ultimate fighting games rating/Samurai Shodown/Hibiki Takane.png",
        "ultimate fighting games rating/Samurai Shodown/Iroha.png",
        "ultimate fighting games rating/Samurai Shodown/Jubei.png",
        "ultimate fighting games rating/Samurai Shodown/Kazuki.png",
        "ultimate fighting games rating/Samurai Shodown/Kibagami.png",
        "ultimate fighting games rating/Samurai Shodown/Mina Majikina.png",
        "ultimate fighting games rating/Samurai Shodown/Nakoruru.png",
        "ultimate fighting games rating/Samurai Shodown/Rimururu.png",
        "ultimate fighting games rating/Samurai Shodown/Senryo.png",
        "ultimate fighting games rating/Samurai Shodown/Shiki.png",
        "ultimate fighting games rating/Samurai Shodown/Shizumaru Hisame.png",
        "ultimate fighting games rating/Samurai Shodown/Sogetsu.png",
        "ultimate fighting games rating/Samurai Shodown/Tam Tam.png",
        "ultimate fighting games rating/Samurai Shodown/Ukyo Tachibana.png",
        "ultimate fighting games rating/Samurai Shodown/WAn-Fu.png",
        "ultimate fighting games rating/Samurai Shodown/Warden.png",
        "ultimate fighting games rating/Samurai Shodown/Wu-Ruixiang.png",
        "ultimate fighting games rating/Samurai Shodown/Yashamaru Kurama.png",
        "ultimate fighting games rating/Samurai Shodown/Yoshitora Tokugawa.png"
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
            updateTopthree();
        }
    }
    
    function ratePicture(score) {
        ratings.push({ picture: pictures[currentIndex - 1], score: score });
        showNextPicture();
    }

    function updateTopthree() {
        const sortedRatings = ratings.sort((a, b) => b.score - a.score).slice(0, 3);

        // Store top four ratings in local storage to pass to the next page
        localStorage.setItem('topthreessdRatings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'ssd_result.html';
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

  