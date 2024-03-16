document.addEventListener('DOMContentLoaded', function () {
    const main = document.querySelector('main');

    // Retrieve top 8 characters from local storage
    const top1List = JSON.parse(localStorage.getItem('top1List')) || [];

    // Display top 8 matches
    top1List.forEach((character, index) => {
        const matchCard = document.createElement('div');
        matchCard.classList.add('match-card');

        const characterImage = document.createElement('img');
        characterImage.src = character.picture;
        characterImage.alt = character.name;

        const characterName = document.createElement('p');
        characterName.textContent = character.name;

        matchCard.appendChild(characterImage);
        matchCard.appendChild(characterName);

        main.appendChild(matchCard);
    });

    // Check if the window has been shown before
    const hasShownModal = localStorage.getItem('hasShownModal');

    // Check if the current page is index.html
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === 'index.html') {
        // Reset the flag indicating that the modal has been shown
        localStorage.removeItem('hasShownModal');
    }

    // Show the submit modal only if it hasn't been shown before
    if (!hasShownModal) {
        showSubmitModal();
    }
});

// Function to show the submit modal
function showSubmitModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";

    // Get the buttons inside the modal
    var submitBtn = document.getElementById("submitBtn");
    var cancelBtn = document.getElementById("cancelBtn");

    // Event listener for the "Yes" button
    submitBtn.onclick = function() {
        // Get the URL from local storage
        var url = JSON.parse(localStorage.getItem('top1List'))[0]; // Assuming the URL is the first item in the top1List array

        // Submit the URL to SheetDB
        submitDataToSheetDB(url);

        // Close the modal
        modal.style.display = "none";

        // Set flag indicating that the window has been shown
        localStorage.setItem('hasShownModal', true);
    }

    // Event listener for the "No" button
    cancelBtn.onclick = function() {
        // Close the modal without submitting the URL
        modal.style.display = "none";

        // Set flag indicating that the window has been shown
        localStorage.setItem('hasShownModal', true);
    }
}

function submitDataToSheetDB() {
    // Retrieve top 8 characters from local storage
    const top1List = JSON.parse(localStorage.getItem('top1List')) || [];

    // Get the URL of the picture (assuming it's the first item in the top1List array)
    var url = top1List[0].picture;

    // Fetch API to send the URL to SheetDB
    fetch('https://sheetdb.io/api/v1/vwy1nwczqg3ig', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                URLs: url // Specify the URL as the value for the "URLs" column
            }
        })
    })
    .then(response => {
        if (response.ok) {
            console.log('URL submitted successfully.');
        } else {
            console.error('Failed to submit URL.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function redirectToPage() {
    window.location.href = 'index.html'; // Replace 'index.html' with the path to your desired HTML page
}
