
document.addEventListener('DOMContentLoaded', function () {
    const pictures = [
        "ultimate fighting games rating/The King of Fighters XV/billy.png",
        "ultimate fighting games rating/The King of Fighters XV/elisabeth.png",
        "ultimate fighting games rating/The King of Fighters XV/isla.png",
        "ultimate fighting games rating/The King of Fighters XV/krohnen.png",
        "ultimate fighting games rating/The King of Fighters XV/maxima.png",
        "ultimate fighting games rating/The King of Fighters XV/ralf.png",
        "ultimate fighting games rating/The King of Fighters XV/shunei.png",
        "ultimate fighting games rating/The King of Fighters XV/yuri.png",
        "ultimate fighting games rating/The King of Fighters XV/benimaru.png",
        "ultimate fighting games rating/The King of Fighters XV/duolon.png",
        "ultimate fighting games rating/The King of Fighters XV/iori yagami.png",
        "ultimate fighting games rating/The King of Fighters XV/king.png",
        "ultimate fighting games rating/The King of Fighters XV/mai.png",
        "ultimate fighting games rating/The King of Fighters XV/orochi yashiro.png",
        "ultimate fighting games rating/The King of Fighters XV/shingo.png",
        "ultimate fighting games rating/The King of Fighters XV/yashiro.png",
        "ultimate fighting games rating/The King of Fighters XV/athena asamiya.png",
        "ultimate fighting games rating/The King of Fighters XV/dolores.png",
        "ultimate fighting games rating/The King of Fighters XV/hinako.png",
        "ultimate fighting games rating/The King of Fighters XV/king of dinosaurs.png",
        "ultimate fighting games rating/The King of Fighters XV/luong.png",
        "ultimate fighting games rating/The King of Fighters XV/orochi shermie.png",
        "ultimate fighting games rating/The King of Fighters XV/shermie.png",
        "ultimate fighting games rating/The King of Fighters XV/yamazaki.png",
        "ultimate fighting games rating/The King of Fighters XV/ash.png",
        "ultimate fighting games rating/The King of Fighters XV/clark.png",
        "ultimate fighting games rating/The King of Fighters XV/heidern.png",
        "ultimate fighting games rating/The King of Fighters XV/kim.png",
        "ultimate fighting games rating/The King of Fighters XV/leona.png",
        "ultimate fighting games rating/The King of Fighters XV/orochi chris.png",
        "ultimate fighting games rating/The King of Fighters XV/ryo.png",
        "ultimate fighting games rating/The King of Fighters XV/whip.png",
        "ultimate fighting games rating/The King of Fighters XV/antonov.png",
        "ultimate fighting games rating/The King of Fighters XV/chris.png",
        "ultimate fighting games rating/The King of Fighters XV/goenitz half.png",
        "ultimate fighting games rating/The King of Fighters XV/k.png",
        "ultimate fighting games rating/The King of Fighters XV/kyo.png",
        "ultimate fighting games rating/The King of Fighters XV/omega rugal.png",
        "ultimate fighting games rating/The King of Fighters XV/rock.png",
        "ultimate fighting games rating/The King of Fighters XV/vanessa.png",
        "ultimate fighting games rating/The King of Fighters XV/angel.png",
        "ultimate fighting games rating/The King of Fighters XV/chizuru.png",
        "ultimate fighting games rating/The King of Fighters XV/geese.png",
        "ultimate fighting games rating/The King of Fighters XV/joe higashi.png",
        "ultimate fighting games rating/The King of Fighters XV/kula.png",
        "ultimate fighting games rating/The King of Fighters XV/najd.png",
        "ultimate fighting games rating/The King of Fighters XV/robert.png",
        "ultimate fighting games rating/The King of Fighters XV/terry.png",
        "ultimate fighting games rating/The King of Fighters XV/andy.png",
        "ultimate fighting games rating/The King of Fighters XV/blue mary.png",
        "ultimate fighting games rating/The King of Fighters XV/gato.png",
        "ultimate fighting games rating/The King of Fighters XV/jenet.png",
        "ultimate fighting games rating/The King of Fighters XV/kukri.png",
        "ultimate fighting games rating/The King of Fighters XV/meitenkun.png",
        "ultimate fighting games rating/The King of Fighters XV/ramon.png",
        "ultimate fighting games rating/The King of Fighters XV/sylvie.png"

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
        localStorage.setItem('topfourtkofxvRatings', JSON.stringify(sortedRatings));

        // Redirect to the result page
        window.location.href = 'tkofxv_result.html';
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

  